import { faqSectionSchema } from "@/content/schema";

import { cancelForm, freezeForm } from "@/content/membership-forms";

export const faqSections = [
  faqSectionSchema.parse({
    title: "Before you come in",
    items: [
      {
        question: "What do I need to bring for class?",
        answer: [
          "Athletic clothing, a water bottle, your scan tag or the app scan tag, and a yoga mat. A towel is required for HOT classes.",
        ],
      },
      {
        question: "What class style is right for me?",
        answer: [
          "Every style, its temperature, and its length is described on [our classes page](/our-classes/). If you are brand new, BASICS and FLOW 1 are the easiest places to start.",
        ],
      },
      {
        question: "Are all classes heated?",
        answer: [
          "No. Our FLOW 1, BASICS, FIT 30 and YIN classes are set to 80° with no added humidity.",
        ],
      },
      {
        question: "Do I need shoes?",
        answer: [
          "No. All classes are done barefoot. Please leave your shoes outside of the studio rooms.",
        ],
      },
      {
        question: "Do you have props available at the studio?",
        answer: ["Yes. Our studio is fully equipped with blocks, straps, weights, blankets, and bolsters."],
      },
      {
        question: "Can I practice if I am pregnant?",
        answer: [
          "A call to your OBGYN is the first step. Once you are cleared by your doctor, you are welcome to practice based on your health and birth plan. We do not recommend starting a heated practice after finding out you are pregnant.",
        ],
      },
      {
        question: "Policies for children and minors",
        answer: [
          "A parent or guardian must be present at the first visit for anyone 14 and under, and must fill out the liability waiver for any student under 18.",
          "For 11–13 year olds, a parent or guardian must attend class with them and be present in the room to assist with questions or concerns without disrupting the class.",
          "Children attending class must possess the maturity and bodily awareness required to participate safely without disruption — follow cues, stay in the room, and focus for the full length of class.",
          "Minimum ages: APEX, FIT, FLOW 2, Sweat Heat & Beatz, HOT and Pranayama are 13 and up (please be aware APEX, FIT and Sweat Heat & Beatz music may contain mature content). FLOW 1 and YIN are 11 and up.",
        ],
      },
    ],
  }),
  faqSectionSchema.parse({
    title: "At the studio",
    items: [
      {
        question: "How do I check in for class?",
        answer: [
          "Open the app, tap the icon in the top right corner of your home screen, and scan the barcode at the front desk. Hang tight while we review your account, get to know your name, and let you know which studio room is yours.",
        ],
      },
      {
        question: "How do I know which location my class will be held at?",
        answer: [
          'Verify the location of your class in your app. Below your class name, you will see either "Gainesville SW" or "Gainesville NW".',
          "Both studios have ample parking, but we recommend you leave 10 minutes earlier than you think you need to in case you hit unexpected traffic on the way in, so you don't have to rush to relaxation.",
        ],
      },
      {
        question: "Do you have showers?",
        answer: [
          "Yes. Our full service locker rooms have showers including shampoo, conditioner, and body wash. We have brushes, hair dryers, Q-tips and more to accommodate your pre and post-work yoga and fitness routine. Bring your own towel or rent one at the front desk.",
        ],
      },
      {
        question: "Do you have rental mats and towels?",
        answer: [
          "Yoga mats, mat towels, face towels, and shower towels can be rented for a fee at the front desk.",
          "Rental mat $5 / member $3 · Rental mat towel $5 / member $3 · Rental hand towel $4 / member $3 · Rental shower towel $4 / member $3",
        ],
      },
      {
        question: "I heard I can use a rental mat for free if I ride my bike. Is that true?",
        answer: [
          "Yes. **Honor nature** is one of our core values, and thanks for helping us do just that. Let us know at the desk and we have your rental covered.",
        ],
      },
      {
        question: "Can I bring my cell phone into the studios?",
        answer: [
          "Our studios are cell free zones to give you a moment of peace and quiet from the buzz of your day. If you are on call emergently for work or have a family member you are caretaking for, please notify the front desk that you will need your phone, bring in a towel to cover it with, and check it discreetly. Thank you for honoring our zen space.",
        ],
      },
      {
        question: "What if I left something at the studio?",
        answer: [
          "Please call or come in as soon as possible after you left your items to reclaim them. Our lost and found is located in the hallway next to the locker rooms. We cannot be responsible for lost items.",
        ],
      },
    ],
  }),
  faqSectionSchema.parse({
    title: "Booking, waitlists, and penalties",
    items: [
      {
        question: "Why am I being prompted to enter my credit card?",
        answer: [
          "Billing information is required on file at both studio locations to book any class, due to our late cancel and no show penalties.",
        ],
      },
      {
        question:
          "I have an active drop in, class pack, or membership, but the app is asking me to choose a package. What do I do?",
        answer: [
          "You do not need to purchase another. Please upload your credit card information either in the app, over the phone, or in person. If that does not solve the error, you may have a duplicate profile — please call the studio.",
        ],
      },
      {
        question: "How does the waitlist work?",
        answer: [
          "If you add yourself to a waitlist, you should plan to attend class. Even if added overnight, all registration policies and fees apply.",
          "Outside the 8 hour window, you will be added to the roster in order of your number on the waitlist and sent a confirmation email. You will still have the option to early cancel outside the 8 hour window, so set a reminder to check if you have been added to the class.",
          "Inside 8 hours, open mat spots are first come first serve. You will receive a text notification that a spot is available, and you must open your app to secure it. If your app says \u201CPending,\u201D the open spot has already been claimed by another student.",
          "When added to class from the waitlist, late cancel and no show policies apply — including if you register for multiple waitlists and get into multiple classes.",
        ],
      },
      {
        question: "Late arrival policies",
        answer: [
          "At class start time, if not all pre-registered students are present, waitlisted students may enter in order of the waitlist roster.",
          "If you are running late, please call the studio to save your spot. Five minutes past class start time, no one will be permitted to enter the class, even if you have called ahead.",
          "Pre-registered students may enter class up to 5 minutes late if mat space is still available, but are not guaranteed a spot if they arrive after the start time. Pre-registered students that arrive more than 5 minutes after start time will be removed from the class without any penalty fees.",
        ],
      },
      {
        question: "Late cancel policies",
        answer: [
          "If you are pre-registered for class and you do not cancel at least 8 hours prior to class start time, you will be charged a **$10 late cancel fee**. There is a one time forgiveness.",
          "If you are late to a class that has a waitlist, and students on the waitlist are present at the start of class, your spot is forfeited unless you call the studio prior to start time so we can reserve your space.",
          "If you need to cancel a class in order to attend another class on the same day but within the 8 hour window, call us and we can accommodate the change without any penalties. If you show up to the wrong studio and cannot take class, you will not be charged. Penalty fees do apply to free classes.",
        ],
      },
      {
        question: "No show policies",
        answer: [
          "If you are pre-registered for a class and you do not come to class, you will be charged a **$20 no show fee**. There is a one time forgiveness.",
        ],
      },
      {
        question: "Why do you have late cancel and no show penalties?",
        answer: [
          "**Cultivate discipline** is echoed in showing up for classes you have registered for or waitlisted and been added to. **Create community** is represented by our desire to open as many spaces for students to practice as possible. **Do the right thing** is our commitment to you.",
          "If you have a special, emergent need to not attend class, please text or call us at (352) 554-4585 (NW) or (352) 792-6373 (SW). We know sometimes emergencies arise, and communication is key for us. There is a one time forgiveness policy on both the late cancel and no show fees.",
        ],
      },
    ],
  }),
  faqSectionSchema.parse({
    title: "Membership",
    items: [
      {
        question: "Do you offer refunds for classes?",
        answer: ["No, all purchases are final for drop ins, class packs, and memberships."],
      },
      {
        question: "Do you offer refunds for workshops?",
        answer: [
          "No, all purchases are non-refundable. If you early cancel a workshop at least 8 hours before the start time, the workshop purchase amount can be returned to a studio account credit that can be applied to a future workshop.",
        ],
      },
      {
        question: "How do I cancel my membership?",
        answer: [
          "All membership cancelations require **30 days notice**. For example, if you get billed the 8th of the month and today is the 15th, your final payment will go through on the 8th of the next month, with no future payments after that.",
          "Monthly and annual contracts both require 30 days notice. There are no early cancellations nor refunds for annual contracts, even in the case of relocation.",
          `[Submit a cancellation request](${cancelForm.path}) and a member of our team will confirm it with you.`,
        ],
      },
      {
        question: "How do I freeze my membership?",
        answer: [
          "While you are frozen, your membership dues continue. Upon reactivation, your membership dues will be $0 for the duration of your freeze.",
          "Freezes can only be made from bill date to bill date — for example August 1st to September 1st, or August 1st to December 1st. We do not allow partial month freezes. Cancelations are never allowed following a freeze.",
          `[Submit a freeze request](${freezeForm.path}) and a member of our team will confirm the dates with you.`,
        ],
      },
      {
        question: "Where are APEX classes shown in the app?",
        answer: [
          "APEX, yoga pod and RITUAL all live in one app now — the RAD App. Open it and switch between studios without logging out.",
        ],
      },
    ],
  }),
];
