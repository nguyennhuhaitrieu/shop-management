import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import product from './product';

const rootReducer = combineReducers({
  product,
  form: formReducer,
});

export default rootReducer;
