import TextParagraphs from '../TextParagraphs'

const IntroText = () => {
  return (
    <div>
      <TextParagraphs delay={0}>
        <span>REPLICANTS</span> ARE BIOENGINEERED HUMANS, DESIGNED BY TYRELL
        CORPORATION <br />
        FOR USE OFF-WORLD. THEIR ENHANCED STRENGHT MADE THEM IDEAL SLAVE LABOR
      </TextParagraphs>

      <TextParagraphs delay={8.8}>
        AFTER A SERIES OF VIOLENT REBELLIONS, THEIR MANUFACTURE BECAME <br />
        PROHIBITED AND TYRELL CORP WENT BANKRUPT.
      </TextParagraphs>

      <TextParagraphs delay={18}>
        THE COLLAPSE OF ECOSYSTEMS IN THE MID 2020S LED TO THE RISE OF
        INDUSTRIALIST <br />
        NIANDER WALLACE, WHOSE MASTERY OF SYNTHETIC FARMING AVERTED FAMINE.
      </TextParagraphs>

      <TextParagraphs delay={29}>
        WALLACE ACQUIRED THE REMAINS OF TYRELL CORP AND CREATED A NEW <br />
        LINE OF REPLICANTS WHO OBEY.
      </TextParagraphs>

      <TextParagraphs delay={37}>
        MANY OLDER MODEL REPLICANTS — NEXUS 8S WITH OPEN-ENDED LIFESPANS —
        SURVIVED. <br />
        THEY ARE HUNTED DOWN AND 'RETIRED'.
      </TextParagraphs>

      <TextParagraphs delay={44}>
        THOSE THAT HUNT THEM STILL GO BY THE NAME...
      </TextParagraphs>

      <TextParagraphs delay={47.6}>
        <span>BLADE RUNNER</span>
      </TextParagraphs>
    </div>
  );
}

export default IntroText