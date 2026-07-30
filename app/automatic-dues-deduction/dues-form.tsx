"use client";

import { useActionState, useId } from "react";
import { submitDuesDeduction, type DuesFormState } from "./actions";

const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Armed Forces (AA)",
  "Armed Forces (AE)",
  "Armed Forces (AP)",
];

const initialState: DuesFormState = { status: "idle", message: "" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="field-hint" style={{ color: "var(--text-accent)" }}>
      {message}
    </p>
  );
}

export function DuesForm() {
  const [state, formAction, pending] = useActionState(
    submitDuesDeduction,
    initialState,
  );
  const uid = useId();
  const err = state.fieldErrors ?? {};

  const describedBy = (name: string) =>
    err[name] ? `${uid}-${name}-error` : undefined;

  return (
    <form action={formAction} noValidate>
      {state.message ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            borderTop: "2px solid var(--border-rule)",
            borderBottom: "1px solid var(--border-hairline)",
            padding: "var(--space-4) 0",
            marginBottom: "var(--space-8)",
            color:
              state.status === "success"
                ? "var(--color-accent-2-700)"
                : "var(--text-accent)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          {state.message}
        </div>
      ) : null}

      <div className="field" style={{ marginBottom: "var(--space-5)" }}>
        <label htmlFor={`${uid}-fullName`}>First and Last Name *</label>
        <input
          className="input"
          id={`${uid}-fullName`}
          name="fullName"
          type="text"
          autoComplete="name"
          required
          aria-describedby={describedBy("fullName")}
        />
        <FieldError id={`${uid}-fullName-error`} message={err.fullName} />
      </div>

      <div className="field-grid" style={{ marginBottom: "var(--space-5)" }}>
        <div className="field">
          <label htmlFor={`${uid}-dateOfBirth`}>Date of Birth *</label>
          <input
            className="input"
            id={`${uid}-dateOfBirth`}
            name="dateOfBirth"
            type="date"
            required
            aria-describedby={describedBy("dateOfBirth")}
          />
          <FieldError
            id={`${uid}-dateOfBirth-error`}
            message={err.dateOfBirth}
          />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-retirementDate`}>Retirement Date *</label>
          <input
            className="input"
            id={`${uid}-retirementDate`}
            name="retirementDate"
            type="date"
            required
            aria-describedby={describedBy("retirementDate")}
          />
          <FieldError
            id={`${uid}-retirementDate-error`}
            message={err.retirementDate}
          />
        </div>
      </div>

      <div className="field" style={{ marginBottom: "var(--space-5)" }}>
        <label htmlFor={`${uid}-email`}>Email *</label>
        <input
          className="input"
          id={`${uid}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={describedBy("email")}
        />
        <FieldError id={`${uid}-email-error`} message={err.email} />
      </div>

      <div className="field" style={{ marginBottom: "var(--space-5)" }}>
        <label htmlFor={`${uid}-county`}>County Association *</label>
        <input
          className="input"
          id={`${uid}-county`}
          name="county"
          type="text"
          required
          aria-describedby={`${uid}-county-hint ${describedBy("county") ?? ""}`.trim()}
        />
        <p className="field-hint" id={`${uid}-county-hint`}>
          This can be county of residence or county retired from.
        </p>
        <FieldError id={`${uid}-county-error`} message={err.county} />
      </div>

      <fieldset style={{ border: 0, padding: 0, margin: "0 0 var(--space-5)" }}>
        <legend
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            padding: 0,
            marginBottom: "var(--space-3)",
          }}
        >
          Address *
        </legend>

        <div className="field" style={{ marginBottom: "var(--space-4)" }}>
          <label htmlFor={`${uid}-address1`}>Address Line 1</label>
          <input
            className="input"
            id={`${uid}-address1`}
            name="address1"
            type="text"
            autoComplete="address-line1"
            required
            aria-describedby={describedBy("address1")}
          />
          <FieldError id={`${uid}-address1-error`} message={err.address1} />
        </div>

        <div className="field" style={{ marginBottom: "var(--space-4)" }}>
          <label htmlFor={`${uid}-address2`}>Address Line 2</label>
          <input
            className="input"
            id={`${uid}-address2`}
            name="address2"
            type="text"
            autoComplete="address-line2"
          />
        </div>

        <div className="field-grid" style={{ marginBottom: "var(--space-4)" }}>
          <div className="field">
            <label htmlFor={`${uid}-city`}>City</label>
            <input
              className="input"
              id={`${uid}-city`}
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              aria-describedby={describedBy("city")}
            />
            <FieldError id={`${uid}-city-error`} message={err.city} />
          </div>
          <div className="field">
            <label htmlFor={`${uid}-state`}>State / Province / Region</label>
            <select
              className="input"
              id={`${uid}-state`}
              name="state"
              defaultValue=""
              required
              aria-describedby={describedBy("state")}
            >
              <option value="" disabled>
                Select a state
              </option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <FieldError id={`${uid}-state-error`} message={err.state} />
          </div>
        </div>

        <div className="field" style={{ maxWidth: "16rem" }}>
          <label htmlFor={`${uid}-postal`}>Zip / Postal Code</label>
          <input
            className="input"
            id={`${uid}-postal`}
            name="postal"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            aria-describedby={describedBy("postal")}
          />
          <FieldError id={`${uid}-postal-error`} message={err.postal} />
        </div>
      </fieldset>

      <div
        style={{
          borderTop: "2px solid var(--border-rule)",
          paddingTop: "var(--space-5)",
          marginBottom: "var(--space-5)",
        }}
      >
        <p style={{ maxWidth: "66ch" }}>
          I agree to a voluntary withholding of annual membership dues of $25
          for the Kentucky Retired Teachers Association from my November annuity
          payment from the Teacher Retirement System of KY. I also authorize TRS
          to share contact and member identification information with KRTA. This
          authorization will remain in effect until I choose to terminate by
          written notice to the Teacher Retirement System of KY prior to October
          15 of any year. *
        </p>
        <label className="check">
          <input
            type="checkbox"
            name="agree"
            value="I agree"
            required
            aria-describedby={describedBy("agree")}
          />
          <span className="box" aria-hidden="true" />
          <span>I agree</span>
        </label>
        <FieldError id={`${uid}-agree-error`} message={err.agree} />
      </div>

      <div className="field-grid" style={{ marginBottom: "var(--space-5)" }}>
        <div className="field">
          <label htmlFor={`${uid}-signature`}>
            Signature (Please Type Your Full Name) *
          </label>
          <input
            className="input"
            id={`${uid}-signature`}
            name="signature"
            type="text"
            required
            aria-describedby={describedBy("signature")}
          />
          <FieldError id={`${uid}-signature-error`} message={err.signature} />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-signatureDate`}>Date *</label>
          <input
            className="input"
            id={`${uid}-signatureDate`}
            name="signatureDate"
            type="date"
            required
            aria-describedby={describedBy("signatureDate")}
          />
          <FieldError
            id={`${uid}-signatureDate-error`}
            message={err.signatureDate}
          />
        </div>
      </div>

      <p style={{ maxWidth: "66ch", fontWeight: 600 }}>
        I agree that by signing with an electronic signature that is the legal
        equivalent of my hand written signature.
      </p>

      <div className="field" style={{ marginBottom: "var(--space-6)" }}>
        <label htmlFor={`${uid}-message`}>Message</label>
        <textarea
          className="input"
          id={`${uid}-message`}
          name="message"
          rows={4}
        />
      </div>

      <button
        className="btn btn-primary btn-lg"
        type="submit"
        disabled={pending}
      >
        {pending ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
