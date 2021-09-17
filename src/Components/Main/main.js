import React, { Fragment } from "react";
import ContactList from "./contact-list";
import SideBar from "../Sidebar/sidebar";
import { Link } from "react-router-dom";
import { Component } from "react";
class Main extends Component {
  
  
  state = {
    Search: ""
  }

  onGetSearch = (e) => {
    const search = e.target.value;
    this.setState({
      Search: search
    })
  }

  render() {
    let {List, onChangeStatus, Remove, onGetCurrentContact, WorkCount, PrivateCount, FamilyCount, FriendsCount} = this.props;
    const countList = List.length;

    let {Search} = this.state;

    return (
      <Fragment>
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <SideBar Count={countList} WorkCount={WorkCount} PrivateCount={PrivateCount} FamilyCount={FamilyCount} FriendsCount={FriendsCount} />
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="contacts-list">
                <Link className="title" to="/addcontact">Add contact</Link>
                <form
                  className="ac-custom ac-checkbox ac-checkmark"
                  autoComplete="off"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="contacts-list-search"
                      placeholder="Search"
                      onKeyUp={this.onGetSearch}
                    />
                  </div>
                  <ContactList
                    List={List}
                    SearchValue={Search}
                    onChangeStatus={onChangeStatus}
                    Remove={Remove}
                    onGetCurrentContact={onGetCurrentContact}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;