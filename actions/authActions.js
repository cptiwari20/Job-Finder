import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from './types';
import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';


export const loginToFacebook = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if(token){
    return dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    })
  }else{
    doFacebookLogin(dispatch)
  }
}

const doFacebookLogin = async dispatch => {
  const result = await Facebook.logInWithReadPermissionsAsync('1071084943053355', {
    permissions: ['public_profile']
  });

  const { type, token } = result;
  if(type === 'cancel'){
    return dispatch({
      type: FACEBOOK_LOGIN_FAIL
    });
  }

  await AsyncStorage.setItem('fb_token', token)
  dispatch({
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: token
  });

}