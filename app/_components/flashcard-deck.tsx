const cards = [
  ["Recover", "Remove refrigerant from an appliance and store it externally without necessarily testing or processing it."],
  ["Recycle", "Clean refrigerant for reuse in equipment belonging to the same owner without meeting every reclamation requirement."],
  ["Reclaim", "Reprocess refrigerant to the applicable purity specifications and verify the result analytically."],
  ["Small appliance", "A factory-made, charged, hermetically sealed product containing five pounds or less of refrigerant."],
  ["Type I", "Certification for servicing small appliances."],
  ["Type II", "Certification for high- and very-high-pressure appliances except small appliances and MVACs."],
  ["Type III", "Certification for low-pressure appliances."],
  ["Universal", "Certification covering Core, Type I, Type II, and Type III."],
  ["R-12 class", "CFC."],
  ["R-22 class", "HCFC."],
  ["R-134a class", "HFC."],
  ["HFC ozone depletion potential", "Zero, because HFCs contain neither chlorine nor bromine."],
  ["Recovery-cylinder fill limit", "Do not fill above 80 percent; leave space for liquid expansion."],
  ["Preferred leak-test gas", "Dry nitrogen used with a regulator and relief valve—not oxygen or compressed air."],
  ["Post-1993 small appliance, working compressor", "Recover 90 percent, or use the EPA four-inch-Hg-vacuum alternative."],
  ["Small appliance, failed compressor", "Recover 80 percent."],
  ["Low-pressure evacuation level", "25 mm Hg absolute under the EPA evacuation table."],
  ["Low-pressure oil removal", "Heat the oil to 130°F before removal to reduce refrigerant release."],
  ["Low-pressure charging order", "Introduce vapor before liquid to reduce water-freezing risk."],
  ["Excessive purge operation", "A sign that air may be leaking into a low-pressure chiller."],
];

export function FlashcardDeck() {
  return (
    <section className="flashcard-section">
      <p className="section-label">20-card starter deck</p>
      <h2>Open a card to check your answer</h2>
      <div className="flashcard-grid">
        {cards.map(([front, back], index) => <details key={front}><summary><span>{String(index + 1).padStart(2, "0")}</span>{front}</summary><p>{back}</p></details>)}
      </div>
    </section>
  );
}

