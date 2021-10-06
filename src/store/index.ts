import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import { userReducer } from "./reducers";
import { mainSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);
