# Pages

Public URLs are inherited from the old Squarespace site. Do not rename one without saying out loud that search rankings and links in past member emails will break.

| URL | Entry | Page |
|---|---|---|
| `/` | `home.tsx` | `HomePage.tsx` |
| `/our-classes/` | `ourClasses.tsx` | `OurClassesPage.tsx` |
| `/our-studios/` | `ourStudios.tsx` | `OurStudiosPage.tsx` |
| `/our-team/` | `ourTeam.tsx` | `OurTeamPage.tsx` |
| `/culture/` | `culture.tsx` | `CulturePage.tsx` |
| `/inclusivity/` | `inclusivity.tsx` | `InclusivityPage.tsx` |
| `/your-first-class/` | `yourFirstClass.tsx` | `YourFirstClassPage.tsx` |
| `/pricing/` | `pricing.tsx` | `PricingPage.tsx` |
| `/northwest-schedule/` | `northwestSchedule.tsx` | `NorthwestSchedulePage.tsx` |
| `/southwest-schedule/` | `southwestSchedule.tsx` | `SouthwestSchedulePage.tsx` |
| `/events/` | `events.tsx` | `EventsPage.tsx` |
| `/teacher-training/` | `teacherTraining.tsx` | `TeacherTrainingPage.tsx` |
| `/workshops/` | `workshops.tsx` | `WorkshopsPage.tsx` |
| `/faq/` | `faq.tsx` | `FaqPage.tsx` |
| `/careers/` | `careers.tsx` | `CareersPage.tsx` |
| `/privacy-policy/` | `privacyPolicy.tsx` | `PrivacyPolicyPage.tsx` |
| `/membership-change/` | `membershipChange.tsx` | `MembershipChangePage.tsx` |
| `/membership-change/thanks/` | `membershipThanks.tsx` | `MembershipThanksPage.tsx` |
| `/cancel/` | `cancel.tsx` | `CancelPage.tsx` |
| `/freeze/` | `freeze.tsx` | `FreezePage.tsx` |
| `/upgrade/` | `upgrade.tsx` | `UpgradePage.tsx` |
| `/downgrade/` | `downgrade.tsx` | `DowngradePage.tsx` |
| `404.html` | `notFound.tsx` | `NotFoundPage.tsx` |

Both schedule pages render the shared `SchedulePage`; the only difference is which studio. The four request forms all render `MembershipForm` and differ only by content.

The request forms and the thank-you page are `noindex` and carry no sticky upsell — nobody cancelling a membership should be shown an ad for the intro offer.

In-page jumps: `#intro`, `#membership`, `#packs`, `#infinity` on pricing.
