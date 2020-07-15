import { settingsRequest, settingSuccess, settingFail } from './actions';
import { getUserId } from '../../common/utils/UserUtils';
import { getJwtToken } from '../../common/utils/TokenUtils';
import fetchDictionaryWords from '../common/word/dictionary-word/service.js';
import createTemplateOfStoreSettings from './helpers';
import authorizedRequest from '../../common/utils/ApiUtils';

const getUserSettings = () => async (dispatch) => {
  const userId = getUserId();
  const token = getJwtToken();
  try {
    dispatch(settingsRequest());
    const getSettingsURL = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`;
    const response = await fetch(getSettingsURL, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (!data.optional.volumeValue) {
      data.optional.volumeValue = 7;
    }
    dispatch(settingSuccess(data));
  } catch (error) {
    dispatch(settingFail(error));
  }
};

const setUserSettings = ({ optional, wordsPerDay }) => async (dispatch) => {
  const userId = getUserId();
  const token = getJwtToken();
  try {
    dispatch(settingsRequest());
    const setSettingsURL = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`;
    const response = await fetch(setSettingsURL, {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ optional, wordsPerDay }),
    });
    const data = await response.json();
    dispatch(settingSuccess(data));
  } catch (error) {
    dispatch(settingFail(error));
  }
};

export const setDefaultUserSettings = () => async (dispatch) => {
  const userId = getUserId();
  const token = getJwtToken();
  const initialState = {
    optional: {
      informationTranslate: true,
      informationDescription: false,
      informationExample: false,
      informationTranscription: true,
      informationPicture: false,
      btnShow: true,
      btnDelete: true,
      btnComplicated: false,
      levelButtons: true,
      customSwitch: false,
      newCardsPerDay: 5,
      difficultyLevel: 2,
      volumeValue: 7,
    },
    wordsPerDay: 35,
  };
  try {
    dispatch(settingsRequest());
    const setSettingsURL = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`;
    const response = await fetch(setSettingsURL, {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(initialState),
    });
    const data = await response.json();
    dispatch(settingSuccess(data));
  } catch (error) {
    dispatch(settingFail(error));
  }
};

export const setUserDifficulty = (difficulty) => async (dispatch, getStore) => {
  const store = getStore();
  const storeDifficulty = store.settings.optional.difficultyLevel;
  if (difficulty === storeDifficulty) { return; }
  const inputSettings = createTemplateOfStoreSettings(store);
  const templateSettings = JSON.stringify(inputSettings);
  const template = JSON.parse(templateSettings);
  template.optional.difficultyLevel = Number(difficulty);
  const userId = getUserId();
  try {
    dispatch(settingsRequest());
    const setSettingsURL = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`;
    const body = JSON.stringify(template);
    const data = await authorizedRequest(setSettingsURL, 'PUT', body);
    await dispatch(settingSuccess(data));
    dispatch(fetchDictionaryWords(difficulty));
  } catch (error) {
    dispatch(settingFail(error));
  }
};

export { getUserSettings, setUserSettings };
