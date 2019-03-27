import {combineReducers} from 'redux';
import auth from './authReducers';
import markers from './locationReducer';


export default combineReducers({
  auth, markers
})