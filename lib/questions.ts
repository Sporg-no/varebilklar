export type Question = {
  id: string;
  topic: "Kjøre- og hviletid" | "Løyve og regelverk";
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceLabel: string;
  sourceUrl: string;
};

const SRC_REGJ = {
  sourceLabel: "Regjeringen, pressemelding 1. juli 2026",
  sourceUrl:
    "https://www.regjeringen.no/no/aktuelt/innforer-krav-om-kjore-og-hviletid-og-fartsskriver-for-varebiler/id3168129/",
};
const SRC_KHT = {
  sourceLabel: "Statens vegvesen – regelverk for kjøre- og hviletid",
  sourceUrl: "https://www.vegvesen.no/kjoretoy/yrkestransport/kjore-og-hviletid/regelverk/",
};
const SRC_LOYVE = {
  sourceLabel: "Statens vegvesen – nasjonalt løyve for varebil",
  sourceUrl:
    "https://www.vegvesen.no/kjoretoy/yrkestransport/transportloyver-og-tillatelser/nasjonalt-varebilloyve/",
};

export const questions: Question[] = [
  {
    id: "q1",
    topic: "Kjøre- og hviletid",
    prompt:
      "Fra hvilken dato gjelder krav om kjøre- og hviletid og fartsskriver for nasjonal godstransport med varebil på 2,5–3,5 tonn?",
    options: ["1. januar 2026", "1. juli 2026", "1. april 2027", "1. januar 2028"],
    correct: 2,
    explanation:
      "1. april 2027. Datoen 1. juli 2026 gjelder internasjonal transport med varebil. For nasjonal transport ble innføringen utsatt ni måneder for å gi bransjen tid til å skaffe og montere fartsskriver.",
    ...SRC_REGJ,
  },
  {
    id: "q2",
    topic: "Kjøre- og hviletid",
    prompt: "Hvor lenge kan du maksimalt kjøre før du må ta pause?",
    options: ["3 timer", "4 timer", "4,5 timer", "6 timer"],
    correct: 2,
    explanation:
      "Etter maksimalt 4,5 timer kjøring skal du ha 45 minutter pause. Kjøretiden telles samlet – korte stopp for levering nullstiller den ikke.",
    ...SRC_KHT,
  },
  {
    id: "q3",
    topic: "Kjøre- og hviletid",
    prompt: "Du vil dele den lovpålagte 45-minutterspausen i to. Hvilken deling er lovlig?",
    options: [
      "30 minutter først, deretter 15 minutter",
      "15 minutter først, deretter 30 minutter",
      "Tre pauser på 15 minutter",
      "20 minutter først, deretter 25 minutter",
    ],
    correct: 1,
    explanation:
      "Pausen kan deles i minst 15 minutter etterfulgt av minst 30 minutter – i den rekkefølgen. 30 + 15 godkjennes ikke som full pause.",
    ...SRC_KHT,
  },
  {
    id: "q4",
    topic: "Kjøre- og hviletid",
    prompt: "Hva er maksimal daglig kjøretid?",
    options: [
      "8 timer, uten unntak",
      "9 timer – kan utvides til 10 timer inntil to ganger i uka",
      "10 timer hver dag",
      "12 timer når det er avtalt med oppdragsgiver",
    ],
    correct: 1,
    explanation:
      "Daglig kjøretid er maks 9 timer. To ganger per uke kan den utvides til 10 timer. Kjøretid er ikke det samme som arbeidstid – lasting, lossing og levering til dør kommer i tillegg.",
    ...SRC_KHT,
  },
  {
    id: "q5",
    topic: "Kjøre- og hviletid",
    prompt: "Hva er hovedregelen for døgnhvil?",
    options: [
      "8 sammenhengende timer",
      "11 sammenhengende timer, eller delt 3 + 9 timer",
      "9 timer hver dag uten unntak",
      "11 timer, men bare på hverdager",
    ],
    correct: 1,
    explanation:
      "Hovedregelen er 11 timer sammenhengende, eller delt i minst 3 + 9 timer. Døgnhvilen kan reduseres til 9 timer maks tre ganger mellom to ukehviler.",
    ...SRC_KHT,
  },
  {
    id: "q6",
    topic: "Kjøre- og hviletid",
    prompt: "Hvor mye kan du maksimalt kjøre totalt over to uker på rad?",
    options: ["56 timer", "90 timer", "100 timer", "112 timer"],
    correct: 1,
    explanation:
      "Maks 56 timer i én uke, men aldri mer enn 90 timer over to påfølgende uker. Kjører du 56 timer én uke, har du bare 34 timer igjen uka etter.",
    ...SRC_KHT,
  },
  {
    id: "q7",
    topic: "Kjøre- og hviletid",
    prompt:
      "Hvilken av disse varebilene i godstransport er IKKE omfattet av de nye kravene fra 1. april 2027?",
    options: [
      "Diesel-varebil på 3,1 tonn som kjører pakker for en oppdragsgiver",
      "Elektrisk varebil på 3,3 tonn som leverer gods 150 km fra foretakets hjemsted",
      "Elektrisk varebil på 3,4 tonn som kjører gods innenfor 80 km fra foretakets hjemsted",
      "Diesel-varebil på 2,8 tonn som kjører møbler mot betaling",
    ],
    correct: 2,
    explanation:
      "Elektriske varebiler under 4 250 kg som frakter gods innenfor 100 km fra foretakets hjemsted er unntatt. Unntatt er også egentransport der kjøring ikke er førerens hovedaktivitet, og privat bruk.",
    ...SRC_REGJ,
  },
  {
    id: "q8",
    topic: "Løyve og regelverk",
    prompt:
      "Et budfirma har tre varebiler på 3,2 tonn som kjører gods mot betaling i Norge. Hvor mange løyver trenger firmaet?",
    options: [
      "Ingen – løyve gjelder bare over 3,5 tonn",
      "Ett løyve for hele firmaet",
      "Tre – ett per kjøretøy",
      "Ett løyve per sjåfør",
    ],
    correct: 2,
    explanation:
      "Nasjonalt varebilløyve kreves per kjøretøy, og hvert kjøretøy må ha med seg gyldig løyvedokument under transport.",
    ...SRC_LOYVE,
  },
  {
    id: "q9",
    topic: "Løyve og regelverk",
    prompt: "Hvem i virksomheten må bestå løyveeksamen for nasjonalt varebilløyve?",
    options: [
      "Alle sjåførene",
      "Transportlederen",
      "Regnskapsføreren",
      "Ingen – det holder med førerkort klasse B",
    ],
    correct: 1,
    explanation:
      "Det er transportlederen som må dokumentere faglig kompetanse, normalt ved bestått løyveeksamen hos Statens vegvesen. Eksamen har 35 oppgaver, og du må ha minst 30 riktige.",
    ...SRC_LOYVE,
  },
  {
    id: "q10",
    topic: "Løyve og regelverk",
    prompt: "Hvem skal ha HMS-kort i varebilbransjen?",
    options: [
      "Bare daglig leder",
      "Sjåfører og medhjelpere som transporterer andres varer",
      "Bare sjåfører med utenlandsk førerkort",
      "Bare sjåfører av kjøretøy over 3,5 tonn",
    ],
    correct: 1,
    explanation:
      "Fra 1. januar 2026 skal sjåfører og medhjelpere som utfører transport av andres varer ha HMS-kort. Arbeidsgiver har ansvaret, og oppdragsgivere skal kreve og kontrollere HMS-kort.",
    sourceLabel: "Regjeringen, 22. desember 2025",
    sourceUrl:
      "https://www.regjeringen.no/no/aktuelt/ryddar-opp-i-varebilbransjen-nye-reglar-og-fleire-krav-til-seriositet/id3144088/",
  },
];
