import { studioSchema } from "@/content/schema";

export const studiosIntro =
  "Our studios are designed with your health, safety, and comfort first. The latest medical-grade air filtration system, antimicrobial cushioned flooring, multi-colored lighting, top-of-the-line props, modern sound systems, and spa-like locker rooms including showers deliver on everything you have been searching for in your fitness experience. Our two locations offer convenient access to the NW and SW side of town.";

export const studios = [
  studioSchema.parse({
    key: "northwest",
    name: "APEX | Yoga Pod Northwest",
    blurb:
      "At the crossroads of NW 16th Blvd and NW 43rd St, in the Fresh Market shopping center with ample parking. APEX | High Intensity Pilates, Gainesville's premier Xformer/Megaformer studio, is offered at both Yoga Pod Gainesville locations.",
    street: "4136 NW 16th Blvd",
    city: "Gainesville, FL 32605",
    phoneDisplay: "352-554-4585",
    phoneRaw: "+13525544585",
    hours: [
      { days: "Mon & Wed", time: "6:00am – 9:30pm" },
      { days: "Tue & Thu", time: "5:15am – 10:00pm" },
      { days: "Fri", time: "5:00am – 7:30pm" },
      { days: "Sat & Sun", time: "8:00am – 7:30pm" },
    ],
    schedulePath: "/northwest-schedule/",
    mapQuery: "4136+NW+16th+Blvd,+Gainesville,+FL+32605",
    photo: "studio-northwest",
  }),
  studioSchema.parse({
    key: "southwest",
    name: "Yoga Pod Southwest",
    blurb:
      "At the crossroads of SW 34th St and SW Archer Rd, in the University Towne Center with ample parking. APEX | High Intensity Pilates, Gainesville's premier Xformer/Megaformer studio, is offered at both Yoga Pod Gainesville locations.",
    street: "3045 SW 34th St Ste 24",
    city: "Gainesville, FL 32608",
    phoneDisplay: "352-792-6373",
    phoneRaw: "+13527926373",
    hours: [
      { days: "Mon & Wed", time: "6:00am – 9:30pm" },
      { days: "Tue & Thu", time: "5:30am – 9:30pm" },
      { days: "Fri", time: "6:00am – 6:45pm" },
      { days: "Sat & Sun", time: "9:45am – 6:45pm" },
    ],
    schedulePath: "/southwest-schedule/",
    mapQuery: "3045+SW+34th+St,+Gainesville,+FL+32608",
    photo: "studio-southwest",
  }),
];
