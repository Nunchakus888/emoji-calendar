import dotenv from 'dotenv';
import { TranslationServiceClient } from '@google-cloud/translate';
import fs from 'fs';
import path from 'path';
import * as localeMap from 'date-fns/locale';

dotenv.config();

const sourceTxt = JSON.parse(fs.readFileSync(new URL('./i18n/0.json', import.meta.url), 'utf-8'));

export const languages = Object.keys(localeMap).map((k) => `${localeMap[k].code}`);

const translationClient = new TranslationServiceClient();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function translateAndSave(jsonData, key, text, targetLanguageCode, sourceLanguageCode = 'en') {
  const request = {
    parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT}/locations/global`,
    contents: Array.isArray(text) ? text : [text],
    mimeType: 'text/plain',
    sourceLanguageCode,
    targetLanguageCode,
  };

  const [response] = await translationClient.translateText(request);

  let temp = {};
  const filePath = path.join(__dirname, `i18n/${targetLanguageCode}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    temp = JSON.parse(fileContent);
  } else {
    temp = jsonData;
  }

  for(const t of response.translations) {
    temp[key] = t.translatedText;
  }

  fs.writeFileSync(filePath, JSON.stringify(temp, null, 2), 'utf-8');
  console.log(`Success: saved to ${targetLanguageCode} for ${targetLanguageCode}`);
}

async function main() {
  for (const lang of languages) {
    if (/^en/.test(lang)) {
      console.log('Jump to translate:', lang);
      continue;
    }
    for (const key of Object.keys(sourceTxt)) {
      // if (key !== 'description') continue;
      const map = {
        [key]: sourceTxt[key],
      };
      await translateAndSave(map, key, sourceTxt[key], lang).catch(e => console.error(`Error translating ${key} to ${lang}: ${e}`));
    }
  }
}

main();