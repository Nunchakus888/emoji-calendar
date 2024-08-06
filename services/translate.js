require('dotenv').config();
// const { TranslationServiceClient } = require('@google-cloud/translate');

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const projectId = 'x-calendar-430915';
const location = 'global';
const text = 'text to translate';

/**
 * PROJECT_ID: x-calendar-430915
 * NAME: x-calendar
 * PROJECT_NUMBER: 429011843889
 */

// 示例：在Node.js中使用环境变量
const apiKey = process.env.GOOGLE_API_KEY;

console.log('-----apiKey', apiKey);

// Imports the Google Cloud Translation library

// Instantiates a client

export async function translateText(text, targetLanguageCode, sourceLanguageCode = 'en') {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode,
    targetLanguageCode,
  };

  // const translationClient = new TranslationServiceClient();


  console.log('-----request', request);


  // Run request
  // const [response] = await translationClient.translateText(request);
  //
  // console.log('-----response', response);
  //
  // for (const translation of response.translations) {
  //   console.log(`Translation: ${translation.translatedText}`);
  // }
  //
  // return response;
}