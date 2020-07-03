import getDataForNextWord from './helper';

export const CHANGE_CURRENT_WORD = 'CHANGE_CURRENT_WORD';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const SHOW_WORD_DATA = 'SHOW_WORD_DATA';

export const changeWord = (
  numOfCurrentWord, dictionaryWords, userWords,
) => async (dispatch) => {
  const dataForNextWord = await getDataForNextWord(numOfCurrentWord, dictionaryWords, userWords);

  dispatch({
    type: CHANGE_CURRENT_WORD,
    payload: {
      currentWordData: dataForNextWord.currentWordData,
      data: dataForNextWord.data,
      arrOfRandomWords: dataForNextWord.arrOfRandomWords,
      numOfCurrentWord: dataForNextWord.numOfWord,
      checkingAnswer: false,
    },
  });
};

export const checkAnswer = ({
  target, answer, lifesCount, iKnowArr,
  iDontKnowArr, currentWordData,
}) => async (dispatch) => {
  let lifes = lifesCount;
  const word = {
    word: currentWordData.word,
    wordTranslate: currentWordData.wordTranslate,
    audio: currentWordData.audio,
    image: currentWordData.image,
    transcription: currentWordData.transcription,
  };

  if (target.id === answer.id) {
    iKnowArr.push({
      ...word,
    });
  } else {
    lifes -= 1;
    iDontKnowArr.push({
      ...word,
    });
  }

  dispatch({
    type: CHECK_ANSWER,
    payload: {
      lifesCount: lifes,
      iKnowArr,
      iDontKnowArr,
      checkingAnswer: true,
    },
  });
};

export const startGame = () => ({
  type: START_GAME,
  payload: {
    gameWasStarted: true,
  },
});

export const endGame = () => ({
  type: END_GAME,
  payload: {
    gameWasStarted: false,
    lifesCount: 5,
    iKnowArr: [],
    iDontKnowArr: [],
    numOfCurrentWord: 0,
  },
});

export const changeVolume = (audio) => (dispatch) => {
  let audioOn;
  if (audio) {
    audioOn = false;
  } else {
    audioOn = true;
  }

  dispatch({
    type: CHANGE_VOLUME,
    payload: {
      audioOn,
    },
  });
};

export const showWordData = (isShowing, dataOfClickedWord) => (dispatch) => {
  let wordDataIsShowing;
  if (isShowing) {
    wordDataIsShowing = false;
  } else {
    wordDataIsShowing = true;
  }

  dispatch({
    type: SHOW_WORD_DATA,
    payload: {
      wordDataIsShowing,
      dataOfClickedWord,
    },
  });
};
