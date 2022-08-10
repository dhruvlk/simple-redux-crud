// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducer from "./components/reducer";

const stores = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={stores}>
    <App />
  </Provider>
)

// ReactDOM.createRoot(
//   <Provider store={stores}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
