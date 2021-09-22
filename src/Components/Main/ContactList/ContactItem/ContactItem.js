import { Link } from "react-router-dom";

import { connect } from "react-redux";
import apiService from "../../../../Services/APIService";

import { RemovedContact, ChangeStatusContact, SetEditContact } from "../../../../Actions/ContactListActions";
import { Component } from "react";

class ContactItem extends Component {

    // onClick = (Id) => {
    //     const {ContactList} = this.props;
    //     const index = ContactList.findIndex(elem => elem.Id === Id);
    //     const partOne = ContactList.slice(0, index);
    //     const partTwo = ContactList.slice(index + 1);
    //     const tmpList = [...partOne, ...partTwo];

    //     apiService.updateDatabse(tmpList);
    //     RemovedContact(tmpList);
    // }

    ChangeStatus = (Id) => {
        const {ContactList, ChangeStatusContact} = this.props;

        const index = ContactList.findIndex(elem => elem.Id === Id);
        let contact = ContactList[index];

        switch (contact.Status) {
            case "Work": contact.Status = "Private"; break;
            case "Private": contact.Status = "Family"; break;
            case "Family": contact.Status = "Friend"; break;
            case "Friend": contact.Status = "Work"; break;
        }

        const tmpList = ContactList.slice();
        tmpList[index] = contact;

        ChangeStatusContact(tmpList);

        apiService.updateDatabse(tmpList);
        
    }

    Edit = (Id) => {
        const {ContactList, SetEditContact, EditContact} = this.props;

        const index = ContactList.findIndex(elem => elem.Id === Id);
        let contact = ContactList[index];
        
        SetEditContact(contact);
    }

    render() {

        const { Id, Name, Email, Phone, Status, Image, Gender, CurrentContact, onClick } = this.props;
        let defaultStatus = "lab lab-warning";
    
        switch (Status) {
            case "Work": defaultStatus = "lab lab-success d-flex rounded"; break;
            case "Private": defaultStatus = "lab lab-danger d-flex rounded"; break;
            case "Family": defaultStatus = "lab lab-primary d-flex rounded"; break;
            case "Friend": defaultStatus = "lab lab-warning d-flex rounded"; break;
        }
    
        const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
    
        return (
            <div className="unit" >
                <div className="field name">
                    <div className="check">
                        <input id="cb2" name="cb1" type="checkbox" />
                        <label htmlFor="cb2"></label>
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
    
                    </div>
                    <div>
                        <img src={img} alt="image" className="avatar" /> {Name}
                    </div>
                    <button type="button" onClick={() => this.ChangeStatus(Id)} className={defaultStatus}>{Status}</button>
                </div>
                <div className="field phone">
                    {Phone}
                </div>
                <div className="field email">
                    {Email}
                </div>
                <div className="icons">
                    <Link to="/edit-contact"><i className="far fa-edit fa-2x" onClick={() => this.Edit(Id)}></i></Link>
                    <i className="far fa-trash-alt fa-2x" onClick={() => onClick(Id)}></i>
                </div>
            </div >
        )
    }
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, CurrentContact, EditContact } = ContactListReducer;
    return { ContactList, CurrentContact, EditContact };
}

const mapDispatchToProps = {
    RemovedContact, ChangeStatusContact, SetEditContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

//export default ContactItem;