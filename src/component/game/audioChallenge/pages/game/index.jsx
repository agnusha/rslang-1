import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Words from '../../components/Words';
import RightWord from '../../components/RightWord';
import Loader from '../../../../common/loader';
import { prepareWords, passDictionaryWordsToUserWords } from '../../../../../common/helper/WordsHelper';
import { MENU_PAGE, STATISTICS_PAGE } from '../../constants';
import setUserStatistics from '../../../../long-term-statistics/statisticsService/statisticsService';
import './styles.scss';

const randomWord = (words) => words[Math.floor(Math.random() * words.length)];

function Game({ setCurrentPage, prepareWords }) {
  const numTranslatedWord = 5;
  const numberOfStages = 10;

  const [wordsGame, setWordsGame] = useState([]);
  useEffect(() => {
    const needWords = numTranslatedWord * numberOfStages;
    const { preparedWords } = prepareWords(needWords);
    const words = preparedWords.slice();
    setWordsGame(words);
  }, [prepareWords]);

  const [isSelectAnswer, setIsSelectAnswer] = useState(false);
  const setAnswerSelected = () => {
    setIsSelectAnswer(true);
  };

  const [stage, setStage] = useState({ stageNum: numberOfStages - 1, words: [], rightWord: null });
  useEffect(() => {
    if (wordsGame.length && stage.stageNum) {
      const stageWords = [];
      let count = stage.stageNum * numTranslatedWord - 1;
      while (stageWords.length < numTranslatedWord) {
        stageWords.push(wordsGame[count]);
        count -= 1;
      }
      const rightWord = randomWord(stageWords);
      setStage((state) => ({ ...state, words: stageWords, rightWord }));
    }
    if (!stage.stageNum) {
      console.log('Game END. Show statistics');
      // dispatchWordsStatistics(knowArray, mistakesArray);
      // setUserStatistics(playAllWords.length, newWords);
      setCurrentPage(STATISTICS_PAGE);
    }
  }, [wordsGame, stage.stageNum]);
  const nextStage = () => {
    console.log(stage.rightWord);
    setIsSelectAnswer(false);
    setStage((state) => ({ ...state, stageNum: state.stageNum - 1 }));
  };

  const handleIsSelectAnswer = () => {
    if (!isSelectAnswer) {
      setIsSelectAnswer(true);
    } else {
      nextStage();
    }
  };

  if (stage.rightWord) {
    return (
      <div className="audioChallenge">
        <RightWord word={stage.rightWord} isSelectAnswer={isSelectAnswer} />
        <Button className="btn-close" variant="outline-danger" onClick={() => setCurrentPage(MENU_PAGE)}>Close</Button>
        <Words words={stage.words} rightWord={stage.rightWord} setAnswerSelected={setAnswerSelected} isSelectAnswer={isSelectAnswer} />
        <Button variant="outline-primary" onClick={handleIsSelectAnswer}>{(isSelectAnswer) ? 'Next' : 'Не знаю'}</Button>
      </div>
    );
  }
  return <Loader />;
}

const mapDispatchToProps = {
  prepareWords,
  setUserStatistics,
  passDictionaryWordsToUserWords,
};

export default connect(null, mapDispatchToProps)(Game);
