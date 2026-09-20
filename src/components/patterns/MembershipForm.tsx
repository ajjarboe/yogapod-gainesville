import { NetlifyForm } from "@/components/patterns/NetlifyForm";
import { RichText } from "@/lib/rich-text";
import { honeypot, responseWindow, thanksPath } from "@/content/membership-forms";
import type { FormField, MembershipForm as MembershipFormContent } from "@/content/schema";

function Field({ field }: { field: FormField }) {
  const required = field.required ? <span aria-hidden="true"> *</span> : null;

  if (field.type === "radio") {
    return (
      <fieldset className="rfield">
        <legend>
          {field.label}
          {required}
        </legend>
        {field.hint ? <p className="rhint rhint-top">{field.hint}</p> : null}
        <div className="rchips">
          {field.options?.map((option) => (
            <label key={option.value} className="rchip">
              <input type="radio" name={field.name} value={option.value} required={field.required} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.type === "select") {
    return (
      <div className="rfield">
        <label htmlFor={field.id}>
          {field.label}
          {required}
        </label>
        <select id={field.id} name={field.name} defaultValue="" required={field.required}>
          {field.options?.map((option) => (
            <option key={option.label} value={option.value} disabled={option.value === ""}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="rfield">
        <label htmlFor={field.id}>
          {field.label}
          {required}
        </label>
        <textarea
          id={field.id}
          name={field.name}
          rows={4}
          placeholder={field.placeholder}
          required={field.required}
        />
      </div>
    );
  }

  return (
    <div className="rfield">
      <label htmlFor={field.id}>
        {field.label}
        {required}
      </label>
      <input
        id={field.id}
        name={field.name}
        type={field.type}
        required={field.required}
        autoComplete={field.autocomplete}
        placeholder={field.placeholder}
        inputMode={field.type === "tel" ? "tel" : field.type === "email" ? "email" : undefined}
      />
      {field.hint ? <p className="rhint">{field.hint}</p> : null}
    </div>
  );
}

/** Use this for any of the four membership request forms. The shape comes
 *  entirely from src/content/membership-forms.ts. */
export function MembershipForm({ form }: { form: MembershipFormContent }) {
  return (
    <NetlifyForm name={form.name} honeypot={honeypot} action={form.thanks ?? thanksPath} className="rform">
      {form.fields.map((field) => (
        <Field key={field.name} field={field} />
      ))}
      <button className="btn btn-primary w-full" type="submit">
        {form.submit}
      </button>
      <p className="fineprint">
        {form.note ??
          `A real person reads this and replies ${responseWindow}. Nothing changes on your account until we confirm it with you.`}
      </p>
    </NetlifyForm>
  );
}

/** The policy a member is agreeing to. Above the form on purpose, not buried under it. */
export function MembershipTerms({ terms }: { terms: string[] }) {
  return (
    <div className="terms">
      {terms.map((term) => (
        <p key={term}>
          <RichText text={term} />
        </p>
      ))}
    </div>
  );
}
