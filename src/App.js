import React, { useEffect } from "react";
import { Provider } from "react-redux";

import Feed from "./features/tweets/Feed";

import store from "./store";
import { appLoaded } from "./features/tweets/tweetsSlice";

function App() {
  useEffect(() => {
    store.dispatch(appLoaded());
  }, []);
  return (
    <Provider store={store}>
      <Feed />
    </Provider>
  );
}

export default App;
