import {
  fetchWordSuccess,
  fetchWordFail,
  fetchWordRequest,
} from './actions';
import { getJwtToken } from '../../common/utils/TokenUtils';

const fetchWordService = () => async (dispatch) => {
  try {
    const words = [];

    const userId = '5eea9233dffad00017faa8e3';
    dispatch(fetchWordRequest(userId));

    const urlWordIds = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words`;
    const responseWordIds = await fetch(urlWordIds, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const parsedResponse = await responseWordIds.json();
    const wordIdList = parsedResponse;

    await Promise.all(wordIdList.map(async (x) => {
      const urlWord = `https://afternoon-falls-25894.herokuapp.com/words/${x.wordId}`;

      const responseWord = await fetch(urlWord);
      const parsedResponseWord = await responseWord.json();

      const currentWord = {
        audio: parsedResponseWord.audio,
        audioExample: parsedResponseWord.audioExample,
        audioMeaning: parsedResponseWord.audioMeaning,
        difficulty: x.difficulty,
        group: parsedResponseWord.group,
        id: parsedResponseWord.id,
        idUserWord: x.Id,
        image: parsedResponseWord.image,
        page: parsedResponseWord.page,
        textExample: parsedResponseWord.textExample,
        textExampleTranslate: parsedResponseWord.textExampleTranslate,
        textMeaning: parsedResponseWord.textMeaning,
        textMeaningTranslate: parsedResponseWord.textMeaningTranslate,
        transcription: parsedResponseWord.transcription,
        word: parsedResponseWord.word,
        wordTranslate: parsedResponseWord.wordTranslate,
        wordsPerExampleSentence: parsedResponseWord.wordsPerExampleSentence,
      };
      words.push(currentWord);
    }));
    dispatch(fetchWordSuccess(words));
  } catch (error) {
    dispatch(fetchWordFail(error));
  }
};

export default fetchWordService;
