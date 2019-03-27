import { FETCH_DATA } from '../actions/types';

export default function(state = [], actions){
  switch (actions.type) {
    case FETCH_DATA:
        return actions.payload;
    default:
      return state;
  }
}