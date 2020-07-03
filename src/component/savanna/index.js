import React from 'react';
import { connect } from 'react-redux';
import {
  changeWord, checkAnswer, startGame, endGame,
} from './redux/actions';
import Loader from '../common/loader/index';
import GamePage from './GamePage/GamePage';
import StartPage from './StartPage/StartPage';
import gamePageImg from './assets/backgroundGame.jpg';
import './style.scss';

class Savanna extends React.Component {
  componentDidMount() {
    const { changeWord, numOfCurrentWord, data } = this.props;
    changeWord(1, 1, numOfCurrentWord, data);
  }

  render() {
    const { data, startGame, gameWasStarted } = this.props;
    return (
      gameWasStarted
        ? (
          <div className='savannaGame' style={{ backgroundImage: `url(${gamePageImg})` }}>
            {data.length === 0
              ? <Loader />
              : <GamePage {...this.props} />}
          </div>
        ) : (
          <StartPage startGame={startGame} />
        )
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.savannaGame,
});

const mapDispathToProps = {
  changeWord, checkAnswer, startGame, endGame,
};

export default connect(mapStateToProps, mapDispathToProps)(Savanna);
