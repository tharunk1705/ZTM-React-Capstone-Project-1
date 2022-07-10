import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { rootReucer } from "./root-reducer";

// root-reducer

//customMiddleware
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState);

  next(action);

  console.log("next state: ", store.getState());
};

const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReucer, undefined, composedEnhancers);
