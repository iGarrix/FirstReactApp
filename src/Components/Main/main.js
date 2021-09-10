import React, { Fragment } from "react";
import ContactList from "./contact-list";
import SideBar from "../Sidebar/sidebar";
import { Link } from "react-router-dom";

const Main = ({List, onChangeStatus, Remove, onGetCurrentContact}) => {

  const countList = List.length;

    return (
      <Fragment>
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <SideBar Count={countList} />
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
                    />
                  </div>
                  <ContactList
                    List={List}
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

export default Main;