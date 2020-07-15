import { registrationRequest, registrationSuccess, registrationFail } from './actions';
import { defaultUserLoginForSendingData } from '../login/service';

const registerUser = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(registrationRequest());

    const userData = {
      email,
      password,
    };

    const REGISTER_USER_URL = 'https://afternoon-falls-25894.herokuapp.com/users';
    const response = await fetch(REGISTER_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      dispatch(registrationSuccess());
      dispatch(defaultUserLoginForSendingData(email, password, callback));
    } else {
      dispatch(registrationFail('Email or password is invalid'));
    }
  } catch (error) {
    dispatch(registrationFail(error));
  }
};

export default registerUser;
