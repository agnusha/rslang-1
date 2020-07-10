/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {

  Tabs, Tab, CardDeck,
} from 'react-bootstrap';

import CardWord from './cardWord/index';

import getUserWords from '../common/word/user-word/selectors';

import { getWordTodayCount } from './utils';
import {
  getLosingFlagSelector,
} from './selectors';

const propTypes = {
  userWords: PropTypes.arrayOf(PropTypes.any).isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userWords: props.userWords,
    };
    this.handlerRestore = this.handlerRestore.bind(this);
  }

  // will use next two method afrer redux set method
  componentDidUpdate(nextProps) {
    if (JSON.stringify(nextProps.userWords) !== JSON.stringify(this.props.userWords)) {
      this.setState({ userWords: this.props.userWords });
    }
  }

  handlerRestore = async () => {
    console.log('handlerRestore');
  }

  render() {
    const {
      settings,
    } = this.props;

    const wordsDeletedList = this.state.userWords.filter((x) => x.userWord.optional && x.userWord.optional.deleted);
    const wordsDifficultList = this.state.userWords.filter((x) => x.userWord.difficulty && x.userWord.difficulty === 'hard' && !wordsDeletedList.includes(x));
    const wordsLearningList = this.state.userWords.filter((x) => !wordsDifficultList.includes(x) && !wordsDeletedList.includes(x));

    return (
      <Tabs defaultActiveKey="learn" id="dictionary-tab-mode" >
        <Tab eventKey="learn" title="Изучаемые слова">
          <div className="my-4">
            {`Число слов: ${wordsLearningList.length} (${getWordTodayCount(wordsLearningList)} сегодня)`}
          </div>
          <CardDeck className="my-4 justify-content-between">
            {wordsLearningList.map((item, i) => <CardWord key={i} word={item} settings={settings} restoreButton="false" />)}
          </CardDeck>
        </Tab>
        <Tab eventKey="difficult" title="Сложные слова">
          <div className="my-4">
            {`Число слов: ${wordsDifficultList.length} (${getWordTodayCount(wordsDifficultList)} сегодня)`}
          </div>
          <CardDeck className="my-4 justify-content-between">
            {wordsDifficultList.map((item, i) => <CardWord key={i} word={item} settings={settings} restoreButton="difficult" handlerRestore={this.handlerRestore} />)}
          </CardDeck>
        </Tab>
        <Tab eventKey="deleted" title="Удалённые слова">
          <div className="my-4">
            {`Число слов: ${wordsDeletedList.length} (${getWordTodayCount(wordsDeletedList)} сегодня)`}
          </div>
          <CardDeck className="my-4 justify-content-between">
            {wordsDeletedList.map((item, i) => <CardWord key={i} word={item} settings={settings} restoreButton="delete" handlerRestore={this.handlerRestore} />)}
          </CardDeck>
        </Tab>
      </Tabs>
    );
  }
}

const getSettings = (store) => store.settings;

const mapStateToProps = (store) => ({
  isLoading: getLosingFlagSelector(store),
  userWords: getUserWords(store),
  settings: getSettings(store),
});

const mapDispatchToProps = {
  getUserWords, getSettings,
};

Dictionary.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
