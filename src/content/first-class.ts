import { faqItemSchema } from "@/content/schema";

export const firstClass = {
  hero: {
    eyebrow: "Your First Class",
    title: "$30 for 30 days unlimited",
    lede: "Practice for just $1 per day. No contracts. No strings attached. Your 30 consecutive days do not start until your first class.",
    cta: "Start your 30 days",
  },
  steps: [
    {
      title: "Book it",
      body: "Pick a class on the schedule for whichever studio is closer. If you are brand new, BASICS or FLOW 1 is the easiest place to land.",
    },
    {
      title: "Arrive 15 minutes early",
      body: "Meet your teacher, tell them about any injuries, and get a tour of the space. Leave your things in the cubbies or the locker room.",
    },
    {
      title: "Settle in",
      body: "Signage outside each room lists the class style, teacher, and props you need. All mat spots are taped on the floor, so roll out and take a breath.",
    },
  ],
  faq: [
    faqItemSchema.parse({
      question: "How do I book?",
      answer: [
        "Book on the schedule page for [Northwest](/northwest-schedule/) or [Southwest](/southwest-schedule/), or use the RAD App.",
        'Choose "$30 for 30 Days" for no strings attached, 30 consecutive days of Yoga Pod classes at both studio locations. If you have not already stored your billing information, you will be prompted to do so.',
      ],
    }),
    faqItemSchema.parse({
      question: "Why am I being prompted to enter my credit card?",
      answer: [
        "Billing information is required on file at both studio locations to book any class, due to our late cancel and no show penalties.",
      ],
    }),
    faqItemSchema.parse({
      question: "I want to buy my $30 for 30 days today, but I can't come until next week. What do I do?",
      answer: [
        "Buy today. The clock does not start on your 30 consecutive days until after your first visit into the studio.",
      ],
    }),
    faqItemSchema.parse({
      question: "I signed up for a class, but how do I know which location?",
      answer: [
        'Verify the location of your class in your app. Below your class name, you will see either "Gainesville SW" or "Gainesville NW".',
        "Both studios have ample parking, but we recommend you leave 10 minutes earlier than you think you need to, so you don't have to rush to relaxation.",
      ],
    }),
    faqItemSchema.parse({
      question: "What do I do to get ready before class?",
      answer: [
        "Hydrate at least 2 hours before class. Eat something light if you are able — a piece of fruit with nut butter, a few eggs, a salad, or a protein bar or shake.",
        "Relax, try a soft smile, and a few deep breaths. It was all of our first time once. You don't need to be nervous; our community is going to welcome you with open arms and a warm smile.",
      ],
    }),
    faqItemSchema.parse({
      question: "What should I wear and what do I bring?",
      answer: [
        "Please wear athletic attire of any sort. A mat length towel is required for all HOT classes for the safety of our staff.",
        "Bring a water bottle, a yoga and/or shower towel, your phone with the app, and your yoga mat if you have one.",
      ],
    }),
    faqItemSchema.parse({
      question: "Do you offer rentals?",
      answer: [
        "Your first yoga mat rental is complimentary. A mat or shower towel is required for all HOT classes, and is not complimentary.",
        "Rental mat $5 / member $3 · Rental mat towel $5 / member $3 · Rental hand towel $4 / member $3 · Rental shower towel $4 / member $3",
      ],
    }),
    faqItemSchema.parse({
      question: "What are the cancelation and no show policies?",
      answer: [
        "If you are pre-registered for class and do not cancel at least 8 hours prior to class start time, you will be charged a **$10 late cancel fee**. If you do not come to class at all, you will be charged a **$20 no show fee**.",
        "There is a one time forgiveness on both policies, because sometimes you oversleep your alarm or hit Archer traffic. We get it. And we got you. Just once though. All penalties apply to free classes.",
        "Head over to our [FAQ page](/faq/) for an extensive policy overview.",
      ],
    }),
    faqItemSchema.parse({
      question: "Do you have showers and changing rooms?",
      answer: [
        "Yes. Our full service locker rooms have showers including shampoo, conditioner, and body wash. We have brushes, hair dryers, Q-tips and more to accommodate your pre and post-work routine. Bring your own towel or rent one at the front desk.",
      ],
    }),
  ],
};
