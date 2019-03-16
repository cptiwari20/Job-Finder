import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from './types';


export default loginToFacebook = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if(token){
    return dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    })
  };

  
}