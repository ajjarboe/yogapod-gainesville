import { formFieldSchema, membershipFormSchema } from "@/content/schema";

/** Where every one of these forms lands after a successful post. */
export const thanksPath = "/membership-change/thanks/";

/** Shared honeypot name. Must match the one baked into public/__forms.html. */
export const honeypot = "company";

/** Staff address for the early-return request called out in the freeze copy. */
export const leadershipEmail = "gnv.leadership@yogapod.com";

/** How long the studio takes to answer any of these. Stated on every form so
 *  nobody submits twice thinking it failed. */
export const responseWindow = "within 4 business days";

const identity = [
  formFieldSchema.parse({
    name: "name",
    id: "f-name",
    label: "Your name",
    type: "text",
    required: true,
    autocomplete: "name",
    placeholder: "First and last",
  }),
  formFieldSchema.parse({
    name: "email",
    id: "f-email",
    label: "Email on your account",
    type: "email",
    required: true,
    autocomplete: "email",
    placeholder: "you@example.com",
    hint: "Use the address your membership is billed under so we can find you.",
  }),
  formFieldSchema.parse({
    name: "phone",
    id: "f-phone",
    label: "Phone",
    type: "tel",
    required: true,
    autocomplete: "tel",
    placeholder: "(352) 555-0123",
  }),
];

const feedback = formFieldSchema.parse({
  name: "feedback",
  id: "f-feedback",
  label: "Anything you would like us to know?",
  type: "textarea",
  placeholder: "Optional, but we read every one of these.",
});

export const membershipHub = {
  eyebrow: "Account management",
  title: "What would you like to do?",
  lede: "Changes to a membership go through a person, not a button. Pick the one that fits and we will confirm by email.",
  note: `Every request here is answered ${responseWindow}.`,
};

export const cancelForm = membershipFormSchema.parse({
  key: "cancel",
  name: "membership-cancel",
  path: "/cancel/",
  eyebrow: "Account management",
  title: "Cancel my membership",
  lede: "We are sorry to see you go. Tell us when, and we will take it from there.",
  terms: [
    "Memberships require **30 days notice** to cancel. If you are billed on the 8th and you submit this on the 15th, your final payment still runs on the 8th of next month, with nothing after that.",
    "Cancellations are not permitted directly following a freeze.",
  ],
  submit: "Send cancellation request",
  fields: [
    ...identity,
    formFieldSchema.parse({
      name: "cancel_date",
      id: "f-date",
      label: "Date you would like to cancel",
      type: "date",
      required: true,
    }),
    formFieldSchema.parse({
      name: "reason",
      id: "f-reason",
      label: "Why are you cancelling?",
      type: "select",
      required: true,
      options: [
        { label: "Select a reason", value: "" },
        { label: "I'm moving", value: "Moving" },
        { label: "The schedule is not right for me", value: "Schedule" },
        { label: "No time to attend classes", value: "No time" },
        { label: "Other — I'll explain below", value: "Other" },
      ],
    }),
    formFieldSchema.parse({
      name: "class_pack_offer",
      id: "f-offer",
      label:
        "Instead of cancelling, would you like to put your last payment toward a 10 class package that never expires, for $250?",
      type: "radio",
      required: true,
      hint: "Choosing yes means your final bill is $250 and the classes stay on your account indefinitely.",
      options: [
        { label: "Yes, send me the details", value: "Yes" },
        { label: "No thanks", value: "No" },
      ],
    }),
    feedback,
    formFieldSchema.parse({
      name: "policy_ack",
      id: "f-ack",
      label: "I understand the 30 day notice policy and authorize the billing described above.",
      type: "radio",
      required: true,
      options: [
        { label: "Yes, I understand", value: "Yes" },
        { label: "No", value: "No" },
      ],
    }),
  ],
});

export const freezeForm = membershipFormSchema.parse({
  key: "freeze",
  name: "membership-freeze",
  path: "/freeze/",
  eyebrow: "Account management",
  title: "Freeze my membership",
  lede: "We will miss you while you're away. Tell us the dates and we will hold your spot.",
  terms: [
    "Your membership dues continue while your account is frozen. When you come back, your dues are **$0.00 for the same length of time** you were away.",
    "Cancellations are not permitted directly following a freeze.",
    `Want to come back early? Email [${leadershipEmail}](mailto:${leadershipEmail}) with your new return date.`,
  ],
  submit: "Send freeze request",
  fields: [
    ...identity,
    formFieldSchema.parse({
      name: "freeze_start",
      id: "f-start",
      label: "First day of your freeze",
      type: "date",
      required: true,
    }),
    formFieldSchema.parse({
      name: "freeze_return",
      id: "f-return",
      label: "Date you will return",
      type: "date",
      required: true,
    }),
    feedback,
  ],
});

export const upgradeForm = membershipFormSchema.parse({
  key: "upgrade",
  name: "membership-upgrade",
  path: "/upgrade/",
  eyebrow: "Account management",
  title: "Upgrade my membership",
  lede: "More yoga. We can't wait to practice with you.",
  terms: [
    "Upgrades take effect on your next billing date unless you ask us for something different.",
    "Not sure which tier you want? Pick the last option and we will talk it through with you.",
  ],
  submit: "Send upgrade request",
  fields: [
    ...identity,
    formFieldSchema.parse({
      name: "upgrade_to",
      id: "f-tier",
      label: "Upgrade my account to",
      type: "radio",
      required: true,
      options: [
        { label: "Monthly Unlimited", value: "Monthly Unlimited" },
        { label: "Annual Unlimited", value: "Annual Unlimited" },
        { label: "Monthly Infinity", value: "Monthly Infinity" },
        { label: "Annual Infinity", value: "Annual Infinity" },
        { label: "Not sure — help me pick", value: "Undecided" },
      ],
    }),
    feedback,
  ],
});

export const downgradeForm = membershipFormSchema.parse({
  key: "downgrade",
  name: "membership-downgrade",
  path: "/downgrade/",
  eyebrow: "Account management",
  title: "Change my membership",
  lede: "Practice changes. Tell us what fits right now and we will adjust it.",
  terms: [
    "Changes take effect on your next billing date unless you ask us for something different.",
    "If you are on an annual agreement, we will confirm what your term allows before anything changes.",
  ],
  submit: "Send change request",
  fields: [
    ...identity,
    formFieldSchema.parse({
      name: "downgrade_to",
      id: "f-tier",
      label: "Change my account to",
      type: "radio",
      required: true,
      options: [
        { label: "yoga pod Monthly Unlimited", value: "yoga pod Monthly Unlimited" },
        { label: "8 classes a month", value: "8 classes a month" },
        { label: "Not sure — help me pick", value: "Undecided" },
      ],
    }),
    feedback,
  ],
});

export const membershipForms = [cancelForm, freezeForm, upgradeForm, downgradeForm];

/** The hub tiles, in the order the old site listed them. */
export const membershipOptions = [
  { form: upgradeForm, blurb: "Move up to unlimited, annual or Infinity." },
  { form: downgradeForm, blurb: "Step down to a smaller plan that still fits your week." },
  { form: freezeForm, blurb: "Going away for a while? Pause and keep your rate." },
  { form: cancelForm, blurb: "End your membership. 30 days notice required." },
];
