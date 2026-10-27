import { personSchema } from "@/content/schema";

export const story = {
  title: "Our Story",
  /** Label on the tap-to-open "+" row; the story stays closed until someone opens it. */
  /** Always visible above the "+" row: the hook, written for search (hot yoga, Gainesville, FL, NW and SW). */
  lede: "yoga pod Gainesville is a locally owned **hot yoga and fitness studio** with locations in Northwest and Southwest Gainesville, FL. Founded in Boulder, Colorado in 2003 and brought home to Gainesville in 2018, we offer FLOW, FIT, HOT and YIN classes and are proud to be part of RAD Collective, home to APEX | RITUAL | yoga pod.",
  summary: "Read the full story",
  /** Link under the story to the one RAD Collective story page (mission, vision, values). */
  more: { href: "https://radcollective.us/about/", label: "Read the full RAD Collective story" },
  paragraphs: [
    "RAD Collective, home to APEX | RITUAL | yoga pod, was born right here in Gainesville, FL, and exists because of what this city taught us.",
    "In 2018, we, Alex and Rae Jarboe, moved to Gainesville with a clear goal: to build a heart-driven, deeply rooted yoga and fitness community. We put down roots in the Oakview neighborhood and committed to showing up as active members of the Gainesville community, not just as studio owners.",
    "yoga pod began in 2003 as a one-room studio in Boulder, Colorado, founded on the belief that thoughtful movement and breath can change lives. Alex and Rae became yoga pod teachers in 2010, its first franchisees in 2013, and co-owners of the entire parent brand overseeing the 10-studio collective in 2017. Their first decision as new owners was to change direction: no more franchising, and every studio built from the heart out. With our business partner Dan Carbonell, a UF alum, and with Rae's parents living outside Orlando, we brought a thriving Western brand to Florida.",
    "Years of building studios and leading teams taught us one clear truth: this work thrives when leadership is centralized, present, and rooted in the daily practice itself. That became yoga pod 2.0, grounded in integrity and long-term care for both people and community.",
    "yoga pod Gainesville SW opened in June 2018 as the first full expression of that vision. Not a franchise: built, owned, and operated by us from day one. Classes filled, waitlists grew, and a strong sense of belonging took hold.",
    "When we expanded to Gainesville's NW side, Rae created APEX in 2019 to bring modern, intelligent Xformer pilates and strength to Gainesville, blending precision and artistry.",
    "Now we are introducing RITUAL, a custom-built contrast therapy club with Finnish saunas and American-made cold plunges, right inside our NW location.",
    "Today, APEX | RITUAL | yoga pod is locally owned and operated by people who live here and love this city. Every leader on our team began as a student, many as Karma Crew or teachers, before stepping into leadership. We hire for attitude and aptitude, and we invest deeply in our people.",
    "At our core, we exist to positively impact Gainesville through breath, strength, and sweat. Guided by Kaizen, the principle of continuous improvement, we work to be a magnificent place to work, an incredible place to practice, and a meaningful part of this city.",
  ],
};

export const ownership = [
  personSchema.parse({
    photo: "alex-jarboe-2026",
    name: "Alex Jarboe",
    role: "Owner",
    classes: [
      "**FLOW 2**: Wednesdays 7pm and Saturdays 10am (NW)",
      "**Sweat, Heat, & Beatz**: Mondays 5:45pm (SW)",
    ],
    bio: [
      "Alex is co-founder of RAD Collective, home to APEX | RITUAL | yoga pod, and a lead facilitator of the yoga pod 200-Hour Teacher Training. His path into leadership grew directly from lived experience: first as a student, then as a teacher, mentor, and builder of community.",
      "Originally from the East Coast, Alex moved to Colorado in 2003 seeking a deeper connection to nature and a slower, more intentional pace of life. There he took his first HOT yoga class, an experience that challenged him physically and opened the door to a lifelong practice. After high-pressure roles with the U.S. Secret Service and Lloyd's of London, yoga became the space that quieted his mind and reshaped his direction.",
      "In 2018, Alex and his wife Rae moved to Gainesville to be closer to family and to grow the heart-driven yoga pod community they had built nationally. They put down roots in the Oakview neighborhood and show up as active members of the Gainesville community, not just as studio owners.",
      "Alex completed his 200-hour teacher training with Jason Bowman and, alongside Dan, his 300-hour training with Gina Caputo in Boulder, CO. He has continued his education through Hot Yoga Training at yoga pod, Trauma-Informed Yoga Trainings, and Prison Yoga Project trainings. He lives in Gainesville and travels back and forth to Colorado, staying connected to the roots of his practice.",
      "Alex teaches Sweat, Heat, & Beatz, FLOW and HOT classes, with a special love for FLOW 2. His classes blend intelligent sequencing, breath-to-movement, moments of stillness, and thoughtfully curated music, challenging yet accessible. Leading the yoga pod 200-Hour Teacher Training is one of his greatest passions, and he loves helping students step confidently into their voice as teachers.",
    ],
  }),
  personSchema.parse({
    photo: "rae-jarboe",
    name: "Rae Jarboe",
    role: "Owner",
    classes: [
      "**FLOW 2**: Tuesdays 8:45am and Sundays 12pm (NW)",
      "**APEX 2**: Tuesdays 12pm (NW)",
    ],
    bio: [
      "**What can students expect in your class?** Hot music, clear guidance, a balance of strength and flexibility, and fun!",
      "**Which yoga pod class do you enjoy most and why?** I love all of our class styles and teach each one. It's so hard to choose when they all have such a perfect balance to one another. I choose them all!",
      "**What type of music do you play in your classes?** Each class will vary, but I am always focused on bringing new, creative music each and every class.",
      "**When you're not practicing yoga, what lights you up?** Travel, hanging with my dog, enjoying time with my husband, playing in nature, going to concerts, cooking, meditating, crafting, journaling, reading, and connecting with friends.",
    ],
  }),
  personSchema.parse({
    photo: "dan-carbonell",
    name: "Dan Carbonell",
    role: "Owner",
  }),
];

/** Leadership Team, matching the leadership list on radhq.us. */
export const directors = [
  personSchema.parse({
    photo: "emily-tharp-pendley",
    name: "Emily Tharp Pendley",
    role: "Director of Operations",
    classes: [
      "**APEX 2**: Mondays 10:30am and Thursdays 5pm (NW)",
      "**FIT**: Tuesdays 5pm (NW)",
      "**Sweat, Heat, & Beatz**: Wednesdays 5:45pm (SW)",
    ],
    bio: [
      "Emily is the Director of Operations at APEX | yoga pod and a lead faculty member in the APEX and FIT Teacher Training Programs. She joined yoga pod as a student in 2019 and quickly fell in love with the challenge of the classes and the community the studio attracted.",
      "She took the first public FIT Teacher Training in 2019 while in graduate school at the University of Florida, then attended one of the pre-opening APEX Teacher Trainings. Those trainings sparked her passion for teaching group fitness, and she chose to follow her heart and pursue fitness as a career.",
      "After finishing her Master's degree in early 2021, Emily joined yoga pod full time as an Assistant Manager, then became Northwest Studio Manager and Regional Studio Director before being promoted to Director of Operations in 2025. Today she teaches FIT, Sweat, Heat, & Beatz, and APEX, oversees operations and staff at both studios, facilitates teacher training, and leads our Athlete Program, Events Team, and Retail Team. She calls the role the biggest blessing: movement, community, teaching, and fun, all in one.",
      "FIT first drew Emily to yoga pod, and it still has her heart. As Lead Faculty for the FIT Teacher Training, she loves teaching proper movement patterns, intelligent sequencing, and the joy of moving to the beat of the music. After yoga pod's 200-hour Teacher Training in Spring 2021, her respect for FLOW grew, and Sweat, Heat, & Beatz, a challenging vinyasa practice set to traditionally non-yogic music, now feels like home.",
    ],
  }),
  personSchema.parse({
    photo: "amanda-allen",
    name: "Amanda Allen",
    role: "Program & Facilities Director",
    classes: [
      "**HOT 45**: Mondays 3:45pm (NW)",
    ],
    bio: [
      "**What students should expect from your class?** A challenging yet centering experience. A space to move your body and quiet your mind.",
      "**What classes do you enjoy most and why?** I love HOT! As a 3rd generation Florida girl, I really like being warm :) I also enjoy the repetition of poses which allow me to find something new each time to deepen into. When I'm not taking HOT, you can find me in an APEX class!",
      "**What type of music do you play in your classes?** I enjoy many different genres, but in my HOT classes I like to play a mix of acoustic, instrumental, nature sounds and a sprinkle of current beats.",
      "**When you're not practicing yoga, what lights you up?** Spending time with my family, being outside, visiting a new national park and photographing all of the above!",
    ],
  }),
  personSchema.parse({
    photo: "lindsey-guarisco",
    name: "Lindsey Guarisco",
    role: "Accounts Director",
    classes: [
      "**FLOW 1**: Mondays 11:45am (NW)",
      "**HOT FLOW Fusion 60**: Saturdays 10:30am (SW)",
    ],
    bio: [
      "**What can students expect in your class?** Students can expect to let go and just have fun in FLOW 2! There is always the option to challenge yourself to see what amazing things your body can do and how it moves! We synchronize our breath to our movement in a heated environment while listening to some tunes and getting a lil’ sweaty. Connecting our breath to our movement allows us to achieve a Flow State, a period of hyper-focus in which we find more energy and enjoyment! :)",
      "**Which yoga pod class do you enjoy most and why?** I enjoy taking FLOW 2 and HOT! It’s always so fun to see the creativity and individuality present in the FLOW 2 sequences that our teachers make. I enjoy HOT because it really challenges me not only physically, but mentally as well.",
      "**What type of music do you play in your classes?** I usually like to play chill beats, but I sometimes throw in some jazzy/popular mashups to make the classes just a little more groovy.",
      "**When you're not practicing yoga, what lights you up?** When I’m not practicing yoga, doing anything with my dog, Roxy, lights me up! I love to be outside with her and go on long walks, or stay inside to cuddle with her and watch movies.",
    ],
  }),
  personSchema.parse({
    photo: "ellen-parks",
    name: "Ellen Parks",
    role: "Regional Assistant Director",
    classes: [
      "**FIT**: Saturdays 8am (NW)",
      "**HOT**: Saturdays 5pm (SW)",
      "**FLOW 2**: Sundays 8am (NW)",
    ],
    bio: [
      "**What can students expect in your class?** Students can expect a challenging, high energy practice that encourages both physical and mental strength. I aim to create a space where everyone feels welcomed and empowered to show up as they are, move with intention, and leave feeling more connected to themselves and their practice.",
      "**Which APEX | yoga pod class do you enjoy most and why?** HOT, FLOW 2, or FIT. I appreciate the consistency and familiarity of the HOT sequence. FLOW offers a beautiful balance of movement and breath. And FIT, although a more recent passion, I find energizes and allows me to move in a way that feels authentic.",
      "**What type of music do you play in your classes?** For HOT, you’ll hear anything from energizing songs to keep you moving during powerful poses and more meditative music as we wind down. For FIT, expect to hear hip-hop, rap, maybe a bit of EDM, and some throw backs!",
      "**When you're not at the studio, what lights you up?** When I’m not at the studio, you’ll find me spending time with my friends around Gainesville, walking in Depot park, reading, or volunteering!",
    ],
  }),
  personSchema.parse({
    photo: "lindsey-brown",
    name: "Lindsey Brown",
    role: "Regional Assistant Director",
  }),
  personSchema.parse({
    photo: "sarah-mcquatters",
    name: "Sarah McQuatters",
    role: "Regional Assistant Director + Retail Manager",
    classes: [
      "**APEX 2**: Tuesdays 8am (SW), Wednesdays and Fridays 6:30am (NW)",
      "**FIT**: Tuesdays 9:30am (SW) and Wednesdays 8am (NW)",
    ],
    bio: [
      "**What can students expect in your class?** Students can expect a lighthearted and supportive environment where they can focus on improving form, strength, and body awareness. Each class offers a challenge to both beginners and long time practitioners! I like to emphasize mindful movement, alignment, and breath to help students create a deeper mind to body connection.",
      "**Which APEX | yoga pod class do you enjoy most?** I have a special place in my heart for every class offered at APEX | yoga pod, but if I had to pick it would be APEX 2 or FIT! I love taking classes with upbeat music and plenty of opportunity to move my body.",
      "**What type of music do you play in your class?** I play a mix of rap, hip-hop, pop and EDM/house. I love a good remix or throwback song! I also love getting song requests from students so I can include music they like too!",
      "**When you’re not in the studio, what lights you up?** When I’m not in the studio I love spending quality time with family and friends. I also love going to concerts, the beach, and cooking!",
    ],
  }),
  personSchema.parse({
    photo: "gia-saint-john",
    name: "Gia Saint John",
    role: "Marketing Manager",
    classes: [
      "**APEX 2**: Wednesdays 12pm (NW), Wednesdays 4:30pm and 5:30pm (SW), Fridays 5pm (NW)",
      "**APEX 1**: Sundays 11:30am (NW)",
    ],
    bio: [
      "**What can students expect in your class?** Students can expect a thoughtful, challenging class that emphasizes control, alignment, and mind-body connection. I focus on intentional movement — you’ll feel strong, supported, and aware of why you’re doing each exercise. My goal is for students to leave feeling energized, balanced, and more connected to their bodies.",
      "**Which APEX | yoga pod class do you enjoy most and why?** My favorite class is APEX 2 because it strikes the perfect balance between challenge and control. It’s strong and athletic, but still deeply intentional — you’re building power while staying connected to your breath and alignment. I love that it pushes people just enough to feel accomplished without feeling overwhelmed.",
      "**What type of music do you play in your classes?** I play mostly rap and hip-hop. I love music that keeps you hype and motivated from start to finish. In my practice, focusing on the music is a great way to push through more challenging exercises — it helps you stay present, confident, and mentally strong when things get tough. The right playlist turns effort into momentum.",
      "**When you're not at the studio, what lights you up?** Outside the studio, I’m energized by travel, wellness, and creative projects. I love exploring new places, spending time in nature, and working on passion projects that blend health and lifestyle.",
    ],
  }),
  personSchema.parse({
    photo: "patrick-moran",
    name: "Patrick Moran",
    role: "Facilities Manager",
  }),
  personSchema.parse({
    photo: "aubrie-harland",
    name: "Aubrie Harland",
    role: "Karma Crew Manager",
  }),
  personSchema.parse({
    photo: "audrey-lefler",
    name: "Audrey Lefler",
    role: "Karma Crew Manager",
    classes: [
      "**HOT**: Mondays 6:30am (NW) and Wednesdays 8:45am (SW)",
    ],
    bio: [
      "**What can students expect in your class?** Students can expect a welcoming environment for all experience levels. I meet the challenges of a hot practice with a calming presence. My focus is on breath and alignment.",
      "**Which APEX | yoga pod class do you enjoy most and why?** My favorite style of class is HOT because the set sequence allows me to find a meditative state quickly. I have recently fallen back in love with YIN.",
      "**What type of music do you play in your classes?** Imagine yourself on the couch with a cup of tea on a cozy afternoon and the playlist that would go along with that moment. It starts soft and will build to the peak pose with more upbeat tunes and usually finish with instrumental music.",
      "**When you're not at the studio, what lights you up?** When I am not practicing I enjoy reading, snuggling with my dogs and cats and relaxing at the beach. I will always be a lifelong student whether I am studying wine, practicing French or any new skill I find fascinating.",
    ],
  }),
];
