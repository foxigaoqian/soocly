export const officialSources = {
  certification: {
    label: "EPA Section 608 certification requirements",
    url: "https://www.epa.gov/section608/section-608-technician-certification-requirements",
  },
  programs: {
    label: "EPA-approved certification programs",
    url: "https://www.epa.gov/section608/certification-programs-section-608-technicians",
  },
  topics: {
    label: "EPA Section 608 test topics",
    url: "https://www.epa.gov/section608/test-topics",
  },
  definitions: {
    label: "EPA definitions of Section 608 terms",
    url: "https://www.epa.gov/section608/definitions-section-608-terms",
  },
  service: {
    label: "EPA stationary refrigeration service practice requirements",
    url: "https://www.epa.gov/section608/stationary-refrigeration-service-practice-requirements",
  },
  safeDisposal: {
    label: "EPA stationary refrigeration safe-disposal requirements",
    url: "https://www.epa.gov/section608/stationary-refrigeration-safe-disposal-requirements",
  },
  evacuation: {
    label: "EPA required appliance evacuation levels",
    url: "https://www.epa.gov/section608/required-level-evacuation-appliances",
  },
  sales: {
    label: "EPA refrigerant sales restriction",
    url: "https://www.epa.gov/section608/refrigerant-sales-restriction",
  },
  recovery: {
    label: "EPA recovering, recycling, and reclaiming definitions",
    url: "https://www.epa.gov/section608/recovering-recycling-and-reclaiming-refrigerants",
  },
  reclamation: {
    label: "EPA refrigerant reclamation requirements",
    url: "https://www.epa.gov/section608/stationary-refrigeration-refrigerant-reclamation-requirements",
  },
  updates: {
    label: "EPA Section 608 regulatory updates",
    url: "https://www.epa.gov/section608/regulatory-updates-section-608-refrigerant-management-regulations",
  },
  leakRepair: {
    label: "EPA stationary refrigeration leak repair requirements",
    url: "https://www.epa.gov/section608/stationary-refrigeration-leak-repair-requirements",
  },
  technicianQa: {
    label: "EPA questions and answers for Section 608 technicians",
    url: "https://www.epa.gov/section608/epas-refrigerant-management-program-questions-and-answers-section-608-certified",
  },
  replacementCard: {
    label: "EPA steps for replacing a Section 608 certification card",
    url: "https://www.epa.gov/section608/steps-replacing-lost-section-608-technician-certification-card",
  },
  recordkeeping: {
    label: "EPA Section 608 recordkeeping and reporting requirements",
    url: "https://www.epa.gov/section608/recordkeeping-and-reporting-requirements-stationary-refrigeration",
  },
  certificationRule: {
    label: "40 CFR Part 82, Subpart F, Appendix D",
    url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F",
  },
} as const;

export type ResourceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
};

export type ResourceFaq = {
  question: string;
  answer: string;
};

export type ResourcePageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  quickFacts: { label: string; value: string }[];
  sections: ResourceSection[];
  faqs: ResourceFaq[];
  sources: (keyof typeof officialSources)[];
  showQuestionSamples?: boolean;
  showFlashcards?: boolean;
  questionSection?: "core" | "type-i" | "type-ii" | "type-iii";
  questionTopics?: string[];
};

export const resourcePages: Record<string, ResourcePageConfig> = {
  questions: {
    path: "/epa-608-test-questions-and-answers",
    eyebrow: "Source-checked review",
    title: "EPA 608 Test Questions and Answers",
    description: "Review original EPA 608 questions with answers, explanations, exam sections, and supporting U.S. EPA sources for Core, Type I, Type II, and Type III.",
    intro: "Use these questions to learn the rule or service principle behind an answer—not to memorize a letter. Every sample is independently written from published Section 608 topics and links to the EPA material used for source checking.",
    quickFacts: [
      { label: "Question bank", value: "100 questions" },
      { label: "Sections", value: "Core + Types I–III" },
      { label: "Answer format", value: "Explanation + source" },
    ],
    sections: [
      {
        heading: "What the questions cover",
        paragraphs: ["The bank follows the topic groups published by the EPA: environmental impacts, regulations, refrigerant handling, recovery, safety, small appliances, high-pressure systems, and low-pressure systems."],
        bullets: ["Core: ozone, Clean Air Act rules, refrigerant classes, recovery terms, safety, and cylinders", "Type I: small-appliance definitions, working and failed compressors, passive recovery, and access fittings", "Type II: leak detection, high-pressure appliances, recovery speed, pressure relationships, and safe servicing", "Type III: low-pressure chillers, purge units, water freezing risk, oil removal, evacuation, and recharging"],
      },
      {
        heading: "How to review an answer",
        paragraphs: ["First answer without opening another tab. Then read the explanation even if you were correct. A correct guess is not the same as knowing the rule. Follow the source link when the item contains a percentage, pressure, equipment date, or regulatory condition."],
        callout: "Soocly does not reproduce confidential or recalled exam items. These are original study questions and are not an official EPA test.",
      },
      {
        heading: "Turn missed questions into a study plan",
        bullets: ["Missed Core questions: review terminology and the reason behind each rule", "Missed Type I questions: separate working-compressor and failed-compressor recovery procedures", "Missed Type II questions: review appliance pressure class, charge size, and recovery equipment date", "Missed Type III questions: review why low-pressure systems pull air and moisture inward"],
      },
    ],
    faqs: [
      { question: "Are these real EPA 608 exam questions?", answer: "No. They are original practice questions written to published EPA Section 608 topics. Soocly does not claim access to confidential official exam items." },
      { question: "Do the answers include explanations?", answer: "Yes. Each active question includes the correct choice, a plain-English explanation, and a link to the supporting EPA topic or rule summary." },
      { question: "Which section should I study first?", answer: "Start with Core because every certification path requires the Core material. Then add Type I, Type II, or Type III for the equipment you expect to service." },
    ],
    sources: ["topics", "certification", "definitions", "service", "evacuation"],
    showQuestionSamples: true,
  },
  score: {
    path: "/epa-608-exam-passing-score",
    eyebrow: "Exam structure",
    title: "EPA 608 Passing Score and Exam Structure",
    description: "Understand EPA 608 passing scores, Core and Type sections, Universal certification, proctored testing, and how to interpret a practice score.",
    intro: "EPA 608 certification is section-based. Passing one strong section does not cancel a weak section, so practice results should be reviewed separately for Core, Type I, Type II, and Type III.",
    quickFacts: [
      { label: "Sections", value: "Core + Types I–III" },
      { label: "Closed-book pass", value: "70% per section" },
      { label: "Universal", value: "100 questions" },
    ],
    sections: [
      {
        heading: "How the certification sections work",
        paragraphs: ["The federal certification-program standard requires at least 25 Core questions and at least 25 questions from each relevant technical group. A Universal test contains 100 questions: 25 Core, 25 Type I, 25 Type II, and 25 Type III."],
        bullets: ["Core: common environmental, regulatory, recovery, and safety knowledge", "Type I: small appliances", "Type II: high- and very-high-pressure appliances", "Type III: low-pressure appliances", "Universal: 25 questions from each of the four groups"],
      },
      {
        heading: "How to use a practice score",
        paragraphs: ["The passing score for closed-book Type I, Type II, Type III, and Universal certification is 70 percent. With 25 questions in a section, that means at least 18 correct answers. A Type I mail-in-format test uses an 84 percent passing score. A practice score is not an official result or a pass guarantee, so aim above the minimum before scheduling."],
        callout: "Check the instructions from your selected EPA-approved testing organization. Testing format and retake policies are set by the provider, not by Soocly.",
      },
      {
        heading: "Open-book and proctored Core",
        paragraphs: ["The EPA states that an open-book Core test cannot be used toward Universal certification. The Core portion must be proctored when it is used to attain Universal certification."],
      },
    ],
    faqs: [
      { question: "Does EPA 608 certification expire?", answer: "No. The EPA states that Section 608 Technician Certification credentials do not expire." },
      { question: "How many questions can I miss on a 25-question section?", answer: "A 70 percent passing score requires 18 correct answers, so 7 incorrect answers still produce 72 percent. This applies to the closed-book format described in Appendix D." },
      { question: "Can a high Universal total make up for failing one section?", answer: "Prepare to pass each 25-question group independently. Universal covers Core and all three technical groups rather than using one strong area to replace an unpassed area." },
      { question: "Is a Soocly score an official result?", answer: "No. It is a practice result only. Official certification requires an EPA-approved test administered by an approved organization." },
    ],
    sources: ["certificationRule", "certification", "programs", "topics"],
  },
  online: {
    path: "/epa-608-certification-online",
    eyebrow: "Taking the real exam",
    title: "EPA 608 Certification Online: What to Check Before Testing",
    description: "Learn how online EPA 608 certification works, how to find an EPA-approved provider, which exam you need, and what to verify before paying.",
    intro: "Some EPA-approved certification programs offer remote or online testing. The important distinction is that an online practice test prepares you, while only an approved certification organization can issue a valid Section 608 credential.",
    quickFacts: [
      { label: "Official provider", value: "EPA-approved only" },
      { label: "Remote options", value: "Available from some programs" },
      { label: "Practice test", value: "Not certification" },
    ],
    sections: [
      {
        heading: "How to find a legitimate online exam",
        paragraphs: ["Begin with the EPA's current list of approved technician certification programs. Contact the provider directly to confirm that it still offers remote testing, which sections are available, what identification is required, and whether a live proctor is used."],
        bullets: ["Confirm that the organization appears on the EPA list", "Check whether you need Type I, II, III, or Universal", "Ask what equipment and internet connection the remote proctor requires", "Confirm fees, retakes, score delivery, and card delivery before paying"],
      },
      {
        heading: "Practice online versus certify online",
        paragraphs: ["Soocly is an independent practice site. Completing a Soocly test does not create a certification record or wallet card. The official exam must be administered by an approved organization."],
        callout: "Avoid any site that implies a free practice quiz itself grants EPA certification.",
      },
      {
        heading: "Choose the right certification type",
        paragraphs: ["Type I covers small appliances. Type II covers high- and very-high-pressure appliances except small appliances and MVACs. Type III covers low-pressure appliances. Universal covers all of those equipment categories."],
      },
    ],
    faqs: [
      { question: "Can I earn EPA 608 certification online?", answer: "Some EPA-approved programs offer remote or online testing. Verify the current option directly with a program listed by the EPA." },
      { question: "Is the Soocly practice test the official exam?", answer: "No. Soocly provides independent preparation only and does not administer certification exams." },
      { question: "Who issues the certification card?", answer: "The approved certification program that administers your test reports the result and provides the credential. The EPA does not issue the card directly." },
    ],
    sources: ["programs", "certification", "topics"],
  },
  cost: {
    path: "/epa-608-exam-cost",
    eyebrow: "Planning your test",
    title: "EPA 608 Exam Cost: Fees, Retakes, and What You Are Paying For",
    description: "Understand who sets EPA 608 exam fees, what to compare between testing providers, and which costs to confirm before scheduling a test.",
    intro: "The EPA approves certification programs but does not publish one national retail price for every exam. Testing organizations set their own fees, delivery methods, and retake policies.",
    quickFacts: [
      { label: "National fixed fee", value: "No single EPA price" },
      { label: "Compare", value: "Exam + proctor + retake" },
      { label: "Provider", value: "EPA-approved program" },
    ],
    sections: [
      {
        heading: "What can change the total cost",
        bullets: ["Certification type: one Type section or Universal", "In-person versus remote proctored delivery", "Whether training material is bundled with the test", "Retake fees for a failed section", "Shipping or replacement-card charges"],
        paragraphs: ["Request a complete price before scheduling. A low advertised entry price may not include a proctor, every Universal section, or a retake."],
      },
      {
        heading: "What the payment should provide",
        paragraphs: ["An approved program should explain who provides the testing, how the exam is administered, when you should receive your score, and when a passing candidate should receive a certification card."],
      },
      {
        heading: "Do not confuse training with certification",
        paragraphs: ["A study guide, course, app, or practice test may have a separate price, but paying for preparation does not itself create an EPA Section 608 credential."],
        callout: "Verify the testing organization on the current EPA list before paying for an exam advertised online.",
      },
    ],
    faqs: [
      { question: "Does the EPA charge one fixed exam fee?", answer: "The EPA approves testing programs, but individual organizations set their own prices and policies. Compare the complete provider fee before scheduling." },
      { question: "Is training included in the exam price?", answer: "It depends on the provider. Some sell training and testing together, while others charge separately." },
      { question: "Will I pay again if I fail a section?", answer: "Retake policies and fees vary by testing organization. Confirm them before your first attempt." },
    ],
    sources: ["programs", "certification"],
  },
  flashcards: {
    path: "/epa-608-flashcards",
    eyebrow: "Rapid review",
    title: "EPA 608 Flashcards for Core, Type I, Type II, and Type III",
    description: "Review essential EPA 608 definitions, certification types, recovery rules, refrigerant handling, and safety concepts with source-checked flashcards.",
    intro: "Flashcards are best for definitions, categories, sequences, and values that must be recalled quickly. Use them after reading the explanation behind a rule—not as a substitute for understanding it.",
    quickFacts: [
      { label: "Decks", value: "Four exam sections" },
      { label: "Use", value: "Recall + review" },
      { label: "Sources", value: "EPA topic pages" },
    ],
    sections: [
      {
        heading: "Core terms to know",
        bullets: ["Recover: remove refrigerant and store it without necessarily processing it", "Recycle: clean refrigerant for reuse in equipment of the same owner", "Reclaim: reprocess refrigerant to the applicable purity specification and verify it analytically", "Small appliance: factory-made, charged, hermetically sealed, and containing five pounds or less of refrigerant"],
      },
      {
        heading: "How to build section recall",
        bullets: ["Core: refrigerant classes, environmental effects, regulations, safety, and the three R definitions", "Type I: working versus failed compressors and system-dependent recovery", "Type II: high-pressure recovery, leak testing, and pressure-temperature relationships", "Type III: low-pressure leaks, purge units, water freezing, oil removal, and vapor-first charging"],
      },
      {
        heading: "A better flashcard routine",
        paragraphs: ["Read the front, answer aloud, and explain why the answer matters in service work. Mark a card as learned only after recalling it correctly on separate days. When a numeric card is missed, return to the linked EPA table instead of memorizing a number without its conditions."],
      },
    ],
    faqs: [
      { question: "Are flashcards enough to pass EPA 608?", answer: "They are useful for recall, but combine them with practice questions, explanations, and the current material supplied by your approved testing or training provider." },
      { question: "Which deck should I start with?", answer: "Start with Core, then study the Type section that matches the equipment you plan to service." },
      { question: "Should I memorize recovery values by themselves?", answer: "No. Learn the appliance pressure class, refrigerant charge, equipment manufacture date, and repair condition that make a value applicable." },
    ],
    sources: ["topics", "definitions", "service", "evacuation", "recovery"],
    showFlashcards: true,
  },
  recoveryRequirements: {
    path: "/epa-608-recovery-requirements",
    eyebrow: "Service-practice review",
    title: "EPA 608 Recovery Requirements Explained",
    description: "Review EPA 608 refrigerant recovery requirements, equipment dates, appliance categories, compressor condition, and evacuation tables.",
    intro: "Recovery questions are difficult because the correct requirement depends on more than one fact. Identify the appliance category first, then check the refrigerant charge, recovery-equipment manufacture date, compressor condition, and whether the work is service, repair, or disposal.",
    quickFacts: [
      { label: "Start with", value: "Appliance category" },
      { label: "Then check", value: "Date + condition" },
      { label: "Primary table", value: "EPA evacuation levels" },
    ],
    sections: [
      { heading: "A repeatable way to solve recovery questions", paragraphs: ["Do not memorize a vacuum value without its conditions. Classify the equipment as a small appliance, high-pressure appliance, very-high-pressure appliance, or low-pressure appliance. Next determine whether the compressor operates, how much refrigerant the appliance contains, and whether the recovery equipment was made before or after November 15, 1993."], bullets: ["Name the appliance pressure category", "Identify the service or disposal situation", "Check the refrigerant charge and compressor condition", "Use the matching row in the current EPA evacuation table"] },
      { heading: "Small-appliance recovery", paragraphs: ["For qualifying small appliances, the EPA service-practice requirements use recovery percentages and also provide a four-inches-of-mercury-vacuum alternative. The percentage changes with recovery-equipment date and whether the appliance compressor works."], callout: "A small appliance is factory-made, charged, and hermetically sealed with five pounds or less of refrigerant. A residential split system is not a small appliance merely because its charge is under five pounds." },
      { heading: "High- and low-pressure recovery", paragraphs: ["For larger appliances, required evacuation levels vary by appliance pressure class, refrigerant charge, equipment date, and repair condition. Low-pressure systems are expressed in millimeters of mercury absolute, while other table entries may use inches of mercury vacuum."], bullets: ["Recover liquid first when practical to improve speed", "Wait after reaching the target vacuum and watch for pressure rebound", "Do not mix different refrigerants in one recovery cylinder", "Follow the recovery-machine manufacturer's instructions"] },
    ],
    faqs: [
      { question: "What determines the required recovery level?", answer: "The appliance category, refrigerant charge, recovery-equipment manufacture date, compressor condition, and type of work can all affect the applicable requirement." },
      { question: "Why does pressure rise after recovery stops?", answer: "Refrigerant may still be trapped as liquid or dissolved in oil. Waiting and checking for rebound helps show whether more recovery is needed." },
      { question: "Can different refrigerants share one recovery cylinder?", answer: "They should not be mixed. Cross-contamination can make identification and reclamation difficult or costly." },
    ],
    sources: ["service", "evacuation", "definitions", "topics"],
    showQuestionSamples: true,
    questionTopics: ["recovery-requirements", "recovery-techniques", "recovery-equipment"],
  },
  evacuationLevels: {
    path: "/epa-608-evacuation-levels",
    eyebrow: "Numeric exam review",
    title: "EPA 608 Evacuation Levels and Vacuum Requirements",
    description: "Study EPA 608 evacuation levels by appliance category, equipment date, refrigerant charge, and repair condition without memorizing the wrong table row.",
    intro: "Evacuation values are among the easiest EPA 608 facts to misapply. The number is only correct when the appliance category and conditions match the same row of the EPA table.",
    quickFacts: [
      { label: "Small appliance option", value: "4 in. Hg vacuum" },
      { label: "Low-pressure table unit", value: "mm Hg absolute" },
      { label: "Check", value: "Equipment date" },
    ],
    sections: [
      { heading: "Read the units before the number", paragraphs: ["Inches of mercury vacuum and millimeters of mercury absolute are not interchangeable descriptions. Before choosing an answer, check whether the question is asking about a small appliance, a high-pressure system, or a low-pressure chiller and note the unit used in the choices."], bullets: ["psig is gauge pressure", "psia includes atmospheric pressure", "Low-pressure evacuation values may be stated as absolute pressure", "Small-appliance requirements may be stated as a recovery percentage or vacuum alternative"] },
      { heading: "Why the November 15, 1993 date matters", paragraphs: ["EPA service-practice requirements distinguish between recovery or recycling equipment manufactured before and after November 15, 1993. Newer equipment is held to different evacuation performance levels, so the date is a decision point in many exam questions."], callout: "When a question supplies an equipment manufacture date, treat it as relevant rather than background detail." },
      { heading: "Avoid the pressure-rebound mistake", paragraphs: ["After reaching the required vacuum, wait briefly and observe the system. A pressure increase can indicate remaining liquid refrigerant or refrigerant trapped in oil. Continue recovery when the applicable procedure requires it rather than assuming the first vacuum reading completes the job."] },
    ],
    faqs: [
      { question: "Is there one EPA 608 evacuation level for every appliance?", answer: "No. The required level changes with appliance category, charge size, recovery-equipment date, and the service or disposal condition." },
      { question: "What does 25 mm Hg absolute refer to?", answer: "It is the evacuation-table unit associated with low-pressure appliances under the applicable EPA conditions; it is not the same as 25 inches of mercury vacuum." },
      { question: "Should I use an old study-guide table?", answer: "Use the current EPA evacuation page and the material supplied by your approved training or testing organization." },
    ],
    sources: ["evacuation", "service", "topics"],
    showQuestionSamples: true,
    questionTopics: ["evacuation", "recovery-requirements", "pressure"],
  },
  refrigerantTypes: {
    path: "/epa-608-refrigerant-types",
    eyebrow: "Core knowledge",
    title: "EPA 608 Refrigerant Types: CFC, HCFC, HFC, and Blends",
    description: "Review CFC, HCFC, HFC, refrigerant examples, ozone depletion, global warming potential, and blend fractionation for the EPA 608 Core exam.",
    intro: "Core questions often test whether you can connect a refrigerant name with its chemical class and environmental effect. Learn the pattern behind the class instead of memorizing isolated letters.",
    quickFacts: [
      { label: "R-12", value: "CFC" },
      { label: "R-22", value: "HCFC" },
      { label: "R-134a", value: "HFC" },
    ],
    sections: [
      { heading: "CFCs, HCFCs, and HFCs", paragraphs: ["CFCs contain chlorine, fluorine, and carbon. HCFCs add hydrogen but still contain chlorine. HFCs contain hydrogen, fluorine, and carbon without chlorine or bromine, giving them zero ozone depletion potential even though some have high global warming potential."], bullets: ["CFC examples include R-11 and R-12", "HCFC examples include R-22", "HFC examples include R-134a", "Zero ozone depletion potential does not mean zero climate impact"] },
      { heading: "Ozone depletion and the Montreal Protocol", paragraphs: ["Stable ozone-depleting compounds can reach the stratosphere, where ultraviolet light releases chlorine or bromine that participates in ozone-destroying reactions. The Montreal Protocol is the international agreement addressing production and consumption of ozone-depleting substances."] },
      { heading: "Refrigerant blends and fractionation", paragraphs: ["Blend components can have different boiling points. If they leak or change phase at different rates, the remaining mixture can change composition; this is fractionation. Follow the refrigerant and equipment manufacturer's charging instructions, especially when a blend must be transferred as liquid."], callout: "Never identify a refrigerant by pressure alone. Use the equipment label, records, and an appropriate identifier when the refrigerant is unknown." },
    ],
    faqs: [
      { question: "Which refrigerant class has zero ozone depletion potential?", answer: "HFCs have zero ozone depletion potential because they contain neither chlorine nor bromine, although some HFCs have high global warming potential." },
      { question: "Is R-22 a CFC?", answer: "No. R-22 is an HCFC and contains chlorine." },
      { question: "What is fractionation?", answer: "It is a change in a refrigerant blend's composition when components leak or change phase at different rates." },
    ],
    sources: ["topics", "updates"],
    showQuestionSamples: true,
    questionSection: "core",
    questionTopics: ["refrigerant-classes", "environmental-impact", "blends"],
  },
  recoverRecycleReclaim: {
    path: "/recover-recycle-reclaim-refrigerant",
    eyebrow: "Three R definitions",
    title: "Recover vs. Recycle vs. Reclaim Refrigerant",
    description: "Learn the EPA definitions of refrigerant recovery, recycling, and reclamation and when used refrigerant must go to a certified reclaimer.",
    intro: "Recover, recycle, and reclaim describe different levels of refrigerant handling. They are not interchangeable, and the ownership of the receiving appliance matters when recovered refrigerant is reused.",
    quickFacts: [
      { label: "Recover", value: "Remove + store" },
      { label: "Recycle", value: "Clean for reuse" },
      { label: "Reclaim", value: "Process to specification" },
    ],
    sections: [
      { heading: "Recover", paragraphs: ["Recovery means removing refrigerant in any condition from an appliance and storing it in an external container without necessarily testing or processing it. Recovery is the first step; it does not establish purity."] },
      { heading: "Recycle", paragraphs: ["Recycling extracts and cleans refrigerant for reuse, commonly using oil separation and passes through moisture-removal devices. Recycled refrigerant may be returned to equipment belonging to the same owner without being processed to every reclamation specification."] },
      { heading: "Reclaim", paragraphs: ["Reclamation reprocesses used refrigerant to the applicable purity specification and verifies the result analytically. Used refrigerant generally must be reclaimed by an EPA-certified reclaimer before it is sold for use in equipment belonging to a different owner."], callout: "A recovery machine is not automatically a reclamation facility. Reclamation includes purity processing, analytical verification, and EPA reclaimer requirements." },
    ],
    faqs: [
      { question: "Does recovering refrigerant make it reclaimed?", answer: "No. Recovery only removes and stores it. Reclamation requires reprocessing to the applicable purity specification and analytical verification." },
      { question: "Can recycled refrigerant be used again?", answer: "It may generally be reused in equipment belonging to the same owner, subject to the applicable rules and service procedures." },
      { question: "Who may reclaim refrigerant for resale?", answer: "Used refrigerant sold for use in another owner's appliance generally must be processed by an EPA-certified reclaimer." },
    ],
    sources: ["recovery", "reclamation", "definitions"],
    showQuestionSamples: true,
    questionSection: "core",
    questionTopics: ["three-r-definitions", "reclamation"],
  },
  leakRepair: {
    path: "/epa-608-leak-repair-requirements",
    eyebrow: "Compliance review",
    title: "EPA 608 Leak Repair Requirements and Exam Concepts",
    description: "Review EPA 608 leak repair concepts, appliance charge thresholds, leak-rate calculations, verification tests, and recordkeeping.",
    intro: "Leak repair rules depend on the refrigerant, appliance category, full charge, calculated leak rate, and the rule in effect for that equipment. Separate leak detection from the regulatory decision about whether and when a repair is required.",
    quickFacts: [
      { label: "First identify", value: "Refrigerant + charge" },
      { label: "Then classify", value: "Appliance type" },
      { label: "Document", value: "Service + verification" },
    ],
    sections: [
      { heading: "Leak detection is not the same as leak-rate calculation", paragraphs: ["A technician may detect a leak with an electronic detector, soap bubbles, ultrasonic equipment, or another appropriate method. The regulatory leak rate is a calculated percentage based on refrigerant added and the appliance's full charge; it is not the detector reading itself."] },
      { heading: "Information needed before applying a threshold", paragraphs: ["Start with the refrigerant type and the appliance's full charge. Then classify the equipment, determine which current federal requirement applies, calculate the leak rate using the required method, and check any repair, retrofit, retirement, or verification timeline."], bullets: ["Refrigerant regulated by the applicable rule", "Full charge of the appliance", "Comfort cooling, commercial refrigeration, industrial process refrigeration, or other category", "Initial and follow-up verification records when required"] },
      { heading: "Use current rules, not a memorized old chart", paragraphs: ["Federal refrigerant rules have changed over time, and states can impose additional requirements. For compliance work, use the current EPA leak-repair page and the regulation that applies on the service date."], callout: "This study page is not a substitute for a compliance determination on a specific appliance." },
    ],
    faqs: [
      { question: "Is a leak detector reading the appliance leak rate?", answer: "No. A detector helps locate leakage; the regulatory leak rate is calculated from refrigerant additions and the appliance's full charge under the applicable method." },
      { question: "Do all leaking appliances follow the same federal repair rule?", answer: "No. Applicability depends on facts including refrigerant, appliance type, charge, and the current rule." },
      { question: "Why are verification tests important?", answer: "When required, initial and follow-up verification tests document that the repair was completed and remains effective under operating conditions." },
    ],
    sources: ["leakRepair", "recordkeeping", "technicianQa", "updates"],
    showQuestionSamples: true,
    questionSection: "type-ii",
    questionTopics: ["leak-detection", "leak-repair"],
  },
  getCertified: {
    path: "/how-to-get-epa-608-certified",
    eyebrow: "Certification path",
    title: "How to Get EPA 608 Certified: Step-by-Step Guide",
    description: "Choose the correct EPA 608 certification type, find an EPA-approved testing organization, prepare, test, and keep your certification record.",
    intro: "EPA Section 608 certification is earned by passing an approved test through an EPA-approved certifying organization. A course, practice site, or completion certificate is not a substitute for the official technician credential.",
    quickFacts: [
      { label: "Credential", value: "EPA-approved test" },
      { label: "Levels", value: "Type I, II, III, Universal" },
      { label: "Expiration", value: "Does not expire" },
    ],
    sections: [
      { heading: "1. Choose the certification level", paragraphs: ["Choose Type I for small appliances, Type II for high- and very-high-pressure appliances other than small appliances and MVACs, Type III for low-pressure appliances, or Universal when your work will cover all three equipment categories."] },
      { heading: "2. Select an approved testing organization", paragraphs: ["Use the EPA's current list of approved technician certification programs. Confirm the testing method, proctoring, identification, fee, retake policy, and card-delivery schedule directly with the organization before paying."], callout: "Core taken as an open-book test cannot be used toward Universal certification. Core must be proctored when it is used to attain Universal." },
      { heading: "3. Prepare and keep your record", paragraphs: ["Study the published test topics, use practice questions to find weak areas, and complete the official exam through the selected provider. Keep a copy of the certification card and the name of the certifying organization because the EPA does not maintain one central database containing every certified technician."] },
    ],
    faqs: [
      { question: "Can I get EPA 608 certified from a free practice test?", answer: "No. Certification requires an EPA-approved test administered by an approved certification organization." },
      { question: "Which EPA 608 certification should I get?", answer: "Choose the Type matching the equipment you service, or Universal when you need Core plus Type I, Type II, and Type III coverage." },
      { question: "Does EPA 608 certification expire?", answer: "No. EPA states that Section 608 Technician Certification credentials do not expire." },
    ],
    sources: ["certification", "programs", "topics", "technicianQa"],
  },
  replacementCard: {
    path: "/epa-608-certification-card-replacement",
    eyebrow: "Credential records",
    title: "How to Replace a Lost EPA 608 Certification Card",
    description: "Find the organization that issued your EPA 608 credential, request a replacement card, and understand what to do when the original program is unknown or closed.",
    intro: "The EPA does not issue technician cards or maintain one universal list of every person ever certified. Replacement usually begins with the certification organization that administered the original test.",
    quickFacts: [
      { label: "First contact", value: "Original test provider" },
      { label: "EPA database", value: "No single master list" },
      { label: "Credential", value: "Does not expire" },
    ],
    sections: [
      { heading: "Find the certifying organization", paragraphs: ["Check old cards, score reports, employer records, school or union records, and the business where the test was taken. A coworker who tested at the same location may have a card showing the organization's name."] },
      { heading: "Request the replacement", paragraphs: ["Contact the certification organization directly and follow its identity-verification and replacement process. Fees and documentation vary by provider. Do not retake the exam only because the physical card was lost unless the provider cannot verify the credential and no record can be recovered."] },
      { heading: "If the original program is unknown", paragraphs: ["Use the EPA replacement-card instructions and contact likely major certifying organizations. If a former program transferred its records, the EPA page may identify the successor organization or explain the next step."], callout: "Keep a digital scan and a separate note containing the certifying organization's name after the replacement arrives." },
    ],
    faqs: [
      { question: "Can the EPA mail me a replacement card?", answer: "The EPA generally directs technicians to the certifying organization because testing organizations issue cards and retain certification records." },
      { question: "Do I need to retake the test when my card is lost?", answer: "A lost card does not make an unexpired credential expire. Start by locating the certifying organization and requesting its replacement process." },
      { question: "Is there one national EPA 608 lookup database?", answer: "The EPA states that it does not maintain a database of all certified technicians; testing organizations keep their certification records." },
    ],
    sources: ["replacementCard", "technicianQa", "certification"],
  },
  type1Guide: {
    path: "/epa-608-type-1-study-guide",
    eyebrow: "Small-appliance review",
    title: "EPA 608 Type I Study Guide",
    description: "Study small-appliance definitions, recovery percentages, compressor condition, passive recovery, access fittings, and safe disposal for the EPA 608 Type I test.",
    intro: "Type I focuses on small appliances, but the phrase has a precise federal definition. Organize your study around appliance eligibility, recovery-equipment type, compressor condition, recovery targets, and disposal responsibilities.",
    quickFacts: [
      { label: "Equipment", value: "Small appliances" },
      { label: "Charge limit", value: "5 lb or less" },
      { label: "Key distinction", value: "Working compressor" },
    ],
    sections: [
      { heading: "Know the small-appliance definition", paragraphs: ["A small appliance is fully manufactured, charged, and hermetically sealed in a factory with five pounds or less of refrigerant. Examples can include household refrigerators, window air conditioners, dehumidifiers, vending machines, and drinking-water coolers when they meet the definition."] },
      { heading: "Recovery percentages and passive recovery", paragraphs: ["The required percentage changes with the recovery-equipment manufacture date and whether the appliance compressor works. System-dependent recovery relies on appliance pressure or the appliance compressor, while self-contained equipment has its own means of moving refrigerant."], bullets: ["Separate working-compressor from failed-compressor procedures", "Know the November 15, 1993 equipment date", "Understand high- and low-side access", "Remove temporary solderless access fittings after service"] },
      { heading: "Disposal and safety", paragraphs: ["Before a small appliance enters final disposal, the disposal chain must verify that refrigerant has been recovered as required. Use proper recovery containers, avoid mixing refrigerants, and never refill a disposable cylinder."] },
    ],
    faqs: [
      { question: "Is a residential split air conditioner a small appliance?", answer: "Not merely because it has a small charge. The federal definition requires the appliance to be factory-made, charged, and hermetically sealed with five pounds or less." },
      { question: "What is passive recovery?", answer: "It is system-dependent recovery that relies on appliance pressure or the appliance compressor instead of a recovery unit's own compressor." },
      { question: "What makes the Type I recovery percentage change?", answer: "The recovery-equipment manufacture date and whether the appliance compressor is functional are key conditions." },
    ],
    sources: ["topics", "definitions", "service", "safeDisposal"],
    showQuestionSamples: true,
    questionSection: "type-i",
  },
  type2Guide: {
    path: "/epa-608-type-2-study-guide",
    eyebrow: "High-pressure review",
    title: "EPA 608 Type II Study Guide",
    description: "Study high-pressure appliances, leak detection, recovery procedures, pressure relationships, components, safety, and evacuation requirements for Type II.",
    intro: "Type II applies to high- and very-high-pressure appliances other than small appliances and motor vehicle air conditioning. Expect questions that combine system operation, pressure, recovery method, leak diagnosis, and service safety.",
    quickFacts: [
      { label: "Equipment", value: "High pressure" },
      { label: "Recover first", value: "Liquid when practical" },
      { label: "Watch", value: "Pressure rebound" },
    ],
    sections: [
      { heading: "Follow refrigerant through the system", paragraphs: ["Know where high-pressure liquid, high-pressure vapor, low-pressure liquid, and low-pressure vapor appear in a typical refrigeration cycle. Connect the compressor, condenser, receiver, metering device, evaporator, and accumulator with the refrigerant state at each location."] },
      { heading: "Recovery and evacuation", paragraphs: ["Recovering liquid before vapor can improve speed. Hose diameter, hose length, ambient temperature, equipment capacity, and cylinder temperature also affect recovery. After the target vacuum is reached, allow time to check for pressure rebound from remaining liquid or oil."], bullets: ["Use the current EPA table", "Check charge size and recovery-equipment date", "Do not use system-dependent recovery above its allowed appliance charge", "Never energize a hermetic compressor under deep vacuum"] },
      { heading: "Leak detection and safe pressurization", paragraphs: ["Use an appropriate detection method and follow the equipment manufacturer's procedure. Dry nitrogen used with a regulator and relief valve is appropriate for pressure testing; oxygen and compressed air can react dangerously with refrigerant oil."] },
    ],
    faqs: [
      { question: "What equipment does Type II cover?", answer: "Type II covers high- and very-high-pressure appliances except small appliances and motor vehicle air conditioning." },
      { question: "Why recover liquid first?", answer: "Liquid recovery can move a large portion of the refrigerant charge faster before the slower vapor-recovery stage." },
      { question: "Why should a hermetic compressor not run under vacuum?", answer: "Operating under deep vacuum can damage the compressor and create electrical or overheating hazards." },
    ],
    sources: ["topics", "service", "evacuation", "leakRepair"],
    showQuestionSamples: true,
    questionSection: "type-ii",
  },
  type3Guide: {
    path: "/epa-608-type-3-study-guide",
    eyebrow: "Low-pressure review",
    title: "EPA 608 Type III Study Guide",
    description: "Study low-pressure chillers, inward leaks, purge units, evacuation, water freezing prevention, oil removal, and vapor-first charging for Type III.",
    intro: "Low-pressure appliances often operate below atmospheric pressure, so leaks can pull air and moisture into the system rather than pushing refrigerant outward. That one principle explains many Type III diagnosis and service questions.",
    quickFacts: [
      { label: "Equipment", value: "Low pressure" },
      { label: "Leak direction", value: "Air moves inward" },
      { label: "Charging start", value: "Vapor first" },
    ],
    sections: [
      { heading: "Understand inward leakage", paragraphs: ["When a chiller operates below atmospheric pressure, leaks allow noncondensables and moisture to enter. Excessive purge-unit operation, increased head pressure, and reduced efficiency can signal an air leak."] },
      { heading: "Evacuation and freeze protection", paragraphs: ["Use the low-pressure row of the current EPA evacuation table. Circulate or remove water as required during evacuation to reduce the risk of freezing in the tubes, and use controlled methods when pressurizing a low-pressure system for leak testing."], callout: "Do not use oxygen or compressed air to pressurize a refrigeration system. Follow the approved hot-water, built-in heating, or regulated nitrogen procedure applicable to the task." },
      { heading: "Oil removal and recharging", paragraphs: ["Refrigerant can remain dissolved in chiller oil. Heating the oil to the EPA test-topic temperature before removal helps reduce refrigerant release. During recharging, introduce vapor before liquid so water in the tubes is less likely to freeze, then follow the equipment manufacturer's charging procedure."] },
    ],
    faqs: [
      { question: "Why do low-pressure chillers pull air inward?", answer: "Many operate below atmospheric pressure, so a leak creates an inward pressure gradient." },
      { question: "Why is excessive purging a warning sign?", answer: "The purge unit removes noncondensables; excessive operation can indicate that air is entering through a leak." },
      { question: "Why add vapor before liquid when recharging?", answer: "Vapor-first charging raises pressure more gradually and reduces the risk of freezing water in the chiller tubes." },
    ],
    sources: ["topics", "service", "evacuation"],
    showQuestionSamples: true,
    questionSection: "type-iii",
  },
};
