import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, NotFoundRoute } from "react-router-dom";

// inport components
import Main from "./Components/Main/main";
import NotFound from "./Components/NotFound/notfound";
import AddContact from "./Components/AddContact/AddContact"

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
          Gender: "men",
          Image: "93"
        },
        {
          Id: 2,
          Name: "Alexa Popovish",
          Phone: "+1-800-600-9898",
          Email: "apostol@gmail.com",
          Status: "Private",
          Gender: "women",
          Image: "39"
        },
        {
          Id: 3,
          Name: "Dobrinya",
          Phone: "+1-800-600-9898",
          Email: "dobrinya@gmail.com",
          Status: "Work",
          Gender: "women",
          Image: "63"
        }
      ]
  }

  onChangeStatus = (Id) => {
    const index = this.state.List.findIndex(elem => elem.Id === Id);
    let contact = this.state.List[index];

    switch (contact.Status) {
        case "Work": contact.Status = "Private"; break;
        case "Private": contact.Status = "Family"; break;
        case "Family": contact.Status = "Friend"; break;
        case "Friend": contact.Status = "Work"; break;
    }

    const tmpList = this.state.List.slice();
    tmpList[index] = contact;

    this.setState({
        ContactList: tmpList
    })
}

  DeleteContact = (Id) => 
  { 
    const index = this.state.List.findIndex(elem => elem.Id === Id);
          const partOne = this.state.List.slice(0, index);
          const partTwo = this.state.List.slice(index + 1);
          const tmpList = [...partOne, ...partTwo];

          this.setState({
              List: tmpList
          })
  }

  CreateContact = (contact) => {
    let list = this.state.List.slice();
    list.push(contact);
    this.setState({
      List: list
    })
  }

  render() {
    const { List } = this.state;
    return(
      <Router>
        <Switch>          
              <Route path="/" exact render={() => (<Main List = {List} onChangeStatus={this.onChangeStatus} Remove={this.DeleteContact} />)} />  
              <Route path="/addcontact" exact render={() => (<AddContact CreateContact={this.CreateContact} />)}></Route>        
              <Route path="*" component={NotFound} /> 
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));