export const translations = {
  nl: {
    title: 'Cannabis Gebruikersenquête',
    intro:
      'Welkom! Wij doen onderzoek naar cannabisgebruik en nodigen je uit om deel te nemen aan onze korte enquête. Als dank voor je deelname kun je een gratis voorgedraaide joint ophalen bij Coffeeshop De Steeg.',
    cta: 'Vul de enquête hieronder in en claim je gratis joint!',
    surveyTitle: 'Enquête',
    surveyLoading: 'Laden…',
  },
  en: {
    title: 'Cannabis Usage Survey',
    intro:
      'Welcome! We are conducting research on cannabis usage and invite you to participate in our short survey. As a thank you for your participation, you can collect a free pre-rolled joint at Coffeeshop De Steeg.',
    cta: 'Fill in the survey below and claim your free joint!',
    surveyTitle: 'Survey',
    surveyLoading: 'Loading…',
  },
  pl: {
    title: 'Ankieta dotycząca użytkowania konopi',
    intro:
      'Witamy! Prowadzimy badania dotyczące używania konopi indyjskich i zapraszamy do udziału w naszej krótkiej ankiecie. W podziękowaniu za udział możesz odebrać darmowego skręconego jointa w Coffeeshop De Steeg.',
    cta: 'Wypełnij ankietę poniżej i odbierz swojego darmowego jointa!',
    surveyTitle: 'Ankieta',
    surveyLoading: 'Ładowanie…',
  },
} as const;

export type Lang = keyof typeof translations;
export const languages: Lang[] = ['nl', 'en', 'pl'];
