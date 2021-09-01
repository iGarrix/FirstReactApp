import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// inport components
import SideBar from "./Components/Sidebar/sidebar";
import Main from "./Components/Main/main";

import "./index.css";

const App = () => {
    return(
      <div class="container bootstrap snippets bootdeys bootdey">
        <div class="row decor-default">
          <SideBar />
          <Main />
        </div>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));