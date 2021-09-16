import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

// inport components
import Main from "./Components/Main/main";
import NotFound from "./Components/NotFound/notfound";
import AddContact from "./Components/AddContact/AddContact"
import EditContact from "./Components/EditContact/EditContact"

import "./index.css";

class App extends Component {

  state = {
      List: [
        {
          Id: uuidv4(),
          Name: "Apostol Petro",
          Phone: "+1-800-600-9898",
          Email: "apostol@gmail.com",
          Status: "Friend",
          Gender: "men",
          Image: "93"
        },
        {
          Id: uuidv4(),
          Name: "Alexa Popovish",
          Phone: "+1-800-600-9898",
          Email: "apostol@gmail.com",
          Status: "Private",
          Gender: "women",
          Image: "39"
        },
        {
          Id: uuidv4(),
          Name: "Dobrinya",
          Phone: "+1-800-600-9898",
          Email: "dobrinya@gmail.com",
          Status: "Work",
          Gender: "women",
          Image: "63"
        }
      ],
      CurrentContact: "",
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

  ReplaceContact = (editedContact) => {
    let list = this.state.List.slice();
    const index = list.findIndex(elem => elem.Id === editedContact.Id);

    list[index] = editedContact;

    this.setState({
      List: list
    })

  }

  onGetCurrentContact = (id) => {
    const index = this.state.List.findIndex(elem => elem.Id === id);
    const currentContact = this.state.List[index];

    this.setState({
      CurrentContact: currentContact
    })
  }

  render() {
    const { List, CurrentContact } = this.state;
    let work = 0;
    let friend = 0;
    let privatec = 0;
    let family = 0;

    List.forEach(i => {if(i.Status === "Work") { ++work; }});
    List.forEach(i => {if(i.Status === "Friend") { ++friend; }});
    List.forEach(i => {if(i.Status === "Private") { ++privatec; }});
    List.forEach(i => {if(i.Status === "Family") { ++family; }});

    return(
      <Router>
        <Switch>          
              <Route path="/" exact render={() => (<Main List = {List} WorkCount={work} FamilyCount={family} PrivateCount={privatec} FriendsCount={friend} onGetCurrentContact={this.onGetCurrentContact} onChangeStatus={this.onChangeStatus} Remove={this.DeleteContact} />)} />  
              <Route path="/addcontact" exact render={() => (<AddContact CreateContact={this.CreateContact} />)}></Route>     
              <Route path="/editcontact" exact render={() => (<EditContact ReplaceContact={this.ReplaceContact} CurrentContact={CurrentContact} />)}></Route>            
              <Route path="*" component={NotFound} /> 
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));