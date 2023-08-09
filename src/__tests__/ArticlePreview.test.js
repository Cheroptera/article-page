/* eslint-disable max-len */
// import React from 'react';
// import { render } from '@testing-library/react';
// import ArticlePreview from './components/ArticlePreview';

// const article = {
//   "id": "2-1-1438547",
//   "state": "published",
//   "title": "Derfor boikotter de Schjødt: «Ikke forenlig med Blystad-gruppens verdier»",
//   "created_at": "2023-04-24T02:02:31Z",
//   "first_published_at": "2023-04-24T02:02:31Z",
//   "updated_at": "2023-05-11T06:37:38Z",
//   "paid": true,
//   "body": [
//     {
//       "type": "text",
//       "html": "I september 2022 fikk advokatfirmaet Schjødt en tydelig beskjed fra Blystad Group, det norske milliardkonsernet som forvalter familieformuen til investorene Arne og Marianne Blystad og deres døtre."
//     },
//     {
//       "type": "text",
//       "html": "Ingen av selskapene i Blystad-gruppen ville lenger kjøpe advokattjenester fra Schjødt, skrev Blystad-gruppens toppsjef, Fredrik Platou, i en epost til ledelsen i Schjødt."
//     },
//     {
//       "type": "text",
//       "html": "Og boikotten stoppet ikke der: Ifølge eposten, som DN kjenner innholdet av, ville selskapet helt la være å investere i selskaper som brukte advokattjenester fra Schjødt, eller anmode om at selskapene byttet advokatfirma. Blystad-gruppen ville også forsøksvis unngå å involvere seg i oppkjøpsprosjekter der Schjødt bisto motparter."
//     },
//     {
//       "type": "text",
//       "html": "Sagt med andre ord ville samtlige Blystad-selskaper slippe å treffe Schjødt-advokater i forhandlinger overhodet, og det skulle de kommunisere tydelig til forhandlingsmotparter i transaksjoner – selgere, kjøpere, banker og andre."
//     },
//     {
//       "type": "image",
//       "src": "https://images.dn.no/image/ZXlucWphd1cyMG9ocVphSEdnTlhNaEZqenpZalNOdnY0U2VKL0RFamdIbz0=/nhst/binary/55cff71d223e804f0872fdfb0e3fb450?image_version=1080",
//       "caption": null,
//       "credit": null,
//       "ratio": "4x3",
//       "style": {
//         "align": "center"
//       }
//     },
//     {
//       "type": "text",
//       "html": "Og boikotten stoppet ikke der: Ifølge eposten, som DN kjenner innholdet av, ville selskapet helt la være å investere i selskaper som brukte advokattjenester fra Schjødt, eller anmode om at selskapene byttet advokatfirma. Blystad-gruppen ville også forsøksvis unngå å involvere seg i oppkjøpsprosjekter der Schjødt bisto motparter."
//     },
//     {
//       "type": "subhead",
//       "value": "«Ikke forenlig»"
//     },
//     {
//       "type": "text",
//       "html": "– Våre observasjoner over tid er at bedriftskulturen i Schjødt synes å være en helt annen enn i andre advokatselskaper. Den er ikke forenlig med Blystad Gruppens verdier eller arbeidsmetoder. Det finnes nok av andre gode advokatfirmaer i byen til at bortfallet av Schjødts tjenester skal være noe tap for oss eller alle våre porteføljeselskaper, skriver daglig leder Fredrik Platou i Blystad-gruppen i en tekstmelding til DN."
//     }
//   ]
// },

//   test('renders article preview correctly', () => {
//     const { getByText, getByAltText } = render(<ArticlePreview {...article} />);

//     const titleElement = getByText(article.title);
//     const summaryElement = getByText('I september 2022 fikk advokatfirmaet Schjødt en tydelig beskjed fra Blystad Group');
//     const imageElement = getByAltText(article.title);

//     expect(titleElement).toBeInTheDocument();
//     expect(summaryElement).toBeInTheDocument();
//     expect(imageElement).toHaveAttribute('src', article.body[4].src);
//   });
