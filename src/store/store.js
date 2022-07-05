import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReucer } from "./root-reducer";

// root-reducer

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReucer, undefined, composedEnhancers);
