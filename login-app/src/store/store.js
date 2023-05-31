import {applyMiddleware, createStore} from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
    key : 'root',
    storage : storage,
    stateReconciler : autoMergeLevel2,
    blacklist : []
};

const middlewares = [thunk];
const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export {store};
export {persistor};