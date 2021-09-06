import React from "react";
import ContactList from "./contact-list";

const Main = ({List, onChangeStatus, Remove}) => {
    return(
        <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="contacts-list">
          <h5 className="title">Contact List</h5>
  
          <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
            <div className="input-group">
              <input type="text" className="contacts-list-search" placeholder="Search" />
            </div>
             <ContactList List={List} onChangeStatus={onChangeStatus} Remove={Remove} />      
          </form>
        </div>
      </div>
    )
}

export default Main;