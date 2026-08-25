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
      { label: "Universal", value: "Pass all four" },
      { label: "Credential", value: "Does not expire" },
    ],
    sections: [
      {
        heading: "How the certification sections work",
        paragraphs: ["The EPA recognizes Type I for small appliances, Type II for high- and very-high-pressure appliances, Type III for low-pressure appliances, and Universal for all equipment categories. Core is the common foundation for a Type credential."],
        bullets: ["Core: common environmental, regulatory, recovery, and safety knowledge", "Type I: small appliances", "Type II: high- and very-high-pressure appliances", "Type III: low-pressure appliances", "Universal: Core plus Types I, II, and III"],
      },
      {
        heading: "How to use a practice score",
        paragraphs: ["A practice score is not an official result or a pass guarantee. Use it as a readiness signal. Aim above the minimum used by your approved testing provider so that unfamiliar wording and test-day pressure do not leave you at the threshold."],
        callout: "Check the instructions from your selected EPA-approved testing organization. Testing format and retake policies are set by the provider, not by Soocly.",
      },
      {
        heading: "Open-book and proctored Core",
        paragraphs: ["The EPA states that an open-book Core test cannot be used toward Universal certification. The Core portion must be proctored when it is used to attain Universal certification."],
      },
    ],
    faqs: [
      { question: "Does EPA 608 certification expire?", answer: "No. The EPA states that Section 608 Technician Certification credentials do not expire." },
      { question: "Can a high Universal total make up for failing one section?", answer: "Treat each section independently. Universal requires the Core and all three Type areas, so your preparation should reach a safe score in every section." },
      { question: "Is a Soocly score an official result?", answer: "No. It is a practice result only. Official certification requires an EPA-approved test administered by an approved organization." },
    ],
    sources: ["certification", "programs", "topics"],
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
};
