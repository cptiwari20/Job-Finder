import { FETCH_DATA } from './types';
import axios from 'axios';

export const fetchData = () => async dispatch => {
  const res = await fetch('https://feeds.citibikenyc.com/stations/stations.json');
  const data = await res.json();
  
  return dispatch({
    type: FETCH_DATA,
    payload: data.stationBeanList
  })
}