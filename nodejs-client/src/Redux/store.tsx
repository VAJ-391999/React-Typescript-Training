import { createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import  { persistStore } from 'redux-persist'

//const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//const composeEnhancers: any = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as any|| null;

export const store: any = createStore(rootReducer);
export const persistor = persistStore(store);

export default {store, persistor};