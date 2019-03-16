import { createStore, applyMiddleware, compose} from 'redux';
import Thunk from 'redux-thunk';
import reducers from '../reducers';

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(Thunk))
)