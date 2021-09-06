import React, { Component } from "react";
import ReactDOM from "react-dom";

// inport components
import SideBar from "./Components/Sidebar/sidebar";
import Main from "./Components/Main/main";

import "./index.css";

class App extends Component {

  state = {
      List: [
        {
          Id: 1,
          Name: "Apostol Petro",
          Phone: "+1-800-600-9898",
          Email: "apostol@gmail.com",
          Status: "Friend",
          Image: "https://randomuser.me/api/portraits/men/93.jpg"
        },
        {
          Id: 2,
          Name: "Alexa Popovish",
          Phone: "+1-800-600-9898",
          Email: "apostol@gmail.com",
          Status: "Private",
          Image: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        {
          Id: 3,
          Name: "Dobrinya",
          Phone: "+1-800-600-9898",
          Email: "dobrinya@gmail.com",
          Status: "Work",
          Image: "https://randomuser.me/api/portraits/men/63.jpg"
        },
        {
          Id: 4,
          Name: "Sasha",
          Phone: "+1-800-600-9898",
          Email: "shasha@gmail.com",
          Status: "Family",
          Image: "https://randomuser.me/api/portraits/men/18.jpg"
        },
        {
          Id: 5,
          Name: "Ilya Myromec",
          Phone: "+1-800-600-9898",
          Email: "myromec@gmail.com",
          Status: "Friend",
          Image: "https://randomuser.me/api/portraits/men/45.jpg"
        }
      ]
  }

  render() {
    const { List } = this.state;
    return(
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <SideBar />
          <Main List = {List} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));