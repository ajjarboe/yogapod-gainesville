import { z } from "zod";

export const navLinkSchema = z.object({
  href: z.string(),
  label: z.string(),
});

export const navGroupSchema = z.object({
  label: z.string(),
  links: z.array(navLinkSchema),
});

export const offeringSchema = z.object({
  id: z.string(),
  price: z.number(),
  label: z.string(),
});

export const classStyleSchema = z.object({
  name: z.string(),
  summary: z.string(),
  detail: z.string(),
  temp: z.string(),
  lengths: z.string(),
});

export const studioSchema = z.object({
  key: z.enum(["northwest", "southwest"]),
  name: z.string(),
  blurb: z.string(),
  street: z.string(),
  city: z.string(),
  phoneDisplay: z.string(),
  phoneRaw: z.string(),
  hours: z.array(z.object({ days: z.string(), time: z.string() })),
  schedulePath: z.string(),
  mapQuery: z.string(),
  photo: z.string(),
});

export const personSchema = z.object({
  name: z.string(),
  role: z.string(),
  /** Path stem under /img/team/. Sizes 400 and 800 must exist. */
  photo: z.string().optional(),
  bio: z.array(z.string()).optional(),
});

export const faqItemSchema = z.object({
  question: z.string(),
  answer: z.array(z.string()),
});

export const faqSectionSchema = z.object({
  title: z.string(),
  items: z.array(faqItemSchema),
});

export const pageMetaSchema = z.object({
  path: z.string(),
  title: z.string(),
  description: z.string(),
});

export const formFieldSchema = z.object({
  name: z.string(),
  id: z.string(),
  label: z.string(),
  type: z.enum(["text", "email", "tel", "date", "textarea", "radio", "select"]),
  required: z.boolean().optional(),
  autocomplete: z.string().optional(),
  placeholder: z.string().optional(),
  hint: z.string().optional(),
  options: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
});

export const membershipFormSchema = z.object({
  key: z.string(),
  /** Netlify form name. Must appear in public/__forms.html or submissions are dropped. */
  name: z.string(),
  path: z.string(),
  eyebrow: z.string(),
  title: z.string(),
  lede: z.string(),
  /** Policy the member is agreeing to. Shown above the form, not buried in fine print. */
  terms: z.array(z.string()),
  submit: z.string(),
  fields: z.array(formFieldSchema),
  /** Where the browser goes after a successful send. Defaults to the membership thank-you. */
  thanks: z.string().optional(),
  /** Line under the send button. Defaults to the membership confirmation note. */
  note: z.string().optional(),
});

export type FormField = z.infer<typeof formFieldSchema>;
export type MembershipForm = z.infer<typeof membershipFormSchema>;

export type NavLink = z.infer<typeof navLinkSchema>;
export type NavGroup = z.infer<typeof navGroupSchema>;
export type Offering = z.infer<typeof offeringSchema>;
export type ClassStyle = z.infer<typeof classStyleSchema>;
export type Studio = z.infer<typeof studioSchema>;
export type Person = z.infer<typeof personSchema>;
export type FaqItem = z.infer<typeof faqItemSchema>;
export type FaqSection = z.infer<typeof faqSectionSchema>;
export type PageMeta = z.infer<typeof pageMetaSchema>;
