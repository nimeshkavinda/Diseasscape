import React, { useState } from "react";
import AppStack from "./src/navigation";
import AppLoading from "expo-app-loading";
import useFonts from "./src/hooks/useFonts";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./src/redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={(err) => {
          console.log(err.message);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
