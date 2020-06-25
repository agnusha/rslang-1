import { combineReducers } from 'redux';
import weatherReducer from '../component/weather/reducer';
import loginReducer from '../component/login/reducer';
import settingsReducer from '../component/settings/reducer';
import dictionaryReducer from "../component/dictionary/reducer";
import GamePageReducer from '../component/english-puzzle/redux/reducers';


const rootReducer = combineReducers({
  weather: weatherReducer,
  login: loginReducer,
  settings: settingsReducer,
  dictionary: dictionaryReducer,
  puzzleGame: GamePageReducer,
});

export default rootReducer;
