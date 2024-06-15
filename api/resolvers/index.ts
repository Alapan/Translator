const { Translate } = require('@google-cloud/translate').v2;

const projectId = process.env.PROJECT_ID;
const key = process.env.API_KEY;
const translate = new Translate({ projectId, key });

export const resolvers = {
  Query: {
    translateString: async (_, args) => {
      const { sourceStr, destinationLangCode } = args;

      try {
        const [translatedString] = await translate.translate(sourceStr, destinationLangCode);
        return translatedString;
      } catch (err) {
        throw err;
      }
    },
    getLanguageCodes: async () => {
      try {
        const [languages] = await translate.getLanguages();
        return languages;
      } catch (err) {
        throw err;
      }
    }
  }
};
