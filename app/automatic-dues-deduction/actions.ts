"use server";

/**
 * The live site posts this form to Everest Forms inside WordPress. There is no
 * equivalent backend here yet, so submission is routed to whatever endpoint KRTA
 * configures in `KRTA_FORM_ENDPOINT` (an email relay, a CRM webhook, whatever
 * they choose). Until that is set the action refuses rather than accepting a
 * member's signed authorization and dropping it.
 */

export type DuesFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const required: { name: string; label: string }[] = [
  { name: "fullName", label: "First and Last Name" },
  { name: "dateOfBirth", label: "Date of Birth" },
  { name: "retirementDate", label: "Retirement Date" },
  { name: "email", label: "Email" },
  { name: "county", label: "County Association" },
  { name: "address1", label: "Address Line 1" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "postal", label: "Zip / Postal Code" },
  { name: "signature", label: "Signature" },
  { name: "signatureDate", label: "Date" },
];

export async function submitDuesDeduction(
  _prev: DuesFormState,
  formData: FormData,
): Promise<DuesFormState> {
  const fieldErrors: Record<string, string> = {};

  for (const field of required) {
    const value = String(formData.get(field.name) ?? "").trim();
    if (!value) fieldErrors[field.name] = `${field.label} is required.`;
  }

  const email = String(formData.get("email") ?? "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (!formData.get("agree")) {
    fieldErrors.agree =
      "You must agree to the voluntary withholding to submit this form.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the fields marked below.",
      fieldErrors,
    };
  }

  const endpoint = process.env.KRTA_FORM_ENDPOINT;
  if (!endpoint) {
    return {
      status: "error",
      message:
        "This form is not yet connected to the KRTA office. Please use the paper submission, or call 1-800-551-7979.",
    };
  }

  const payload = Object.fromEntries(formData.entries());
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form: "automatic-dues-deduction", ...payload }),
  });

  if (!res.ok) {
    return {
      status: "error",
      message:
        "We could not submit your form. Please try again, or call the KRTA office at 1-800-551-7979.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your automatic dues deduction authorization has been sent to the KRTA office.",
  };
}
