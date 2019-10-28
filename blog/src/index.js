import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// thunk delay the dispatch of the action and returns a function
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
