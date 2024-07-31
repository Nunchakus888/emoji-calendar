require('dotenv').config();
import { TranslationServiceClient } from '@google-cloud/translate';

// const {TranslationServiceClient} = require().v2;
// Instantiates a client
const translationClient = new TranslationServiceClient({ key: process.env.GOOGLE_TRANSLATE_API_KEY });

export async function translateText(text) {
  // Construct request
  const request = {
    parent: `projects/x-calendar-430915/locations/global`,
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: 'sr-Latn',
  };

  // Run request
  // const [response] = await translationClient.translateText(request);
  //
  // for (const translation of response.translations) {
  //   console.log(`Translation: ${translation.translatedText}`);
  // }
}
