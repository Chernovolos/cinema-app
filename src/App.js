import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import './index.scss';
import Layout from "./component/Layout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
