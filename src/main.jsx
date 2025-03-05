import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
// import App from 'App';
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider> */}
      {/* <HistoryRouter history={browserHistory} basename="/react-vite"> */}
      {/* <ToastContainer/> */}
      <App />
      {/* </HistoryRouter> */}
    {/* </Provider> */}
  </React.StrictMode>
);
