import { combineReducers } from 'redux';
import weatherReducer from '../component/weather/reducer';
import loginReducer from '../component/login/reducer';
import dictionaryReducer from '../component/dictionary/reducer';
import GamePageReducer from '../component/english-puzzle/redux/reducers';
import authReducer from '../component/common/auth-provider/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  login: loginReducer,
  dictionary: dictionaryReducer,
  puzzleGame: GamePageReducer,
  auth: authReducer,
});

export default rootReducer;
