import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReucer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { loggerMiddleware } from "./middleware/middleware";

// root-reducer

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReucer);

// const middlewares = [loggerMiddleware];
const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
const comsposeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = comsposeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
