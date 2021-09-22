import { Link } from "react-router-dom";

import { connect } from "react-redux";
import apiService from "../../../../Services/APIService";

import { RemovedContact } from "../../../../Actions/ContactListActions";
import { Component } from "react";

class ContactItem extends Component {

    onClick = (Id) => {
        const {ContactList} = this.props;
        const index = ContactList.findIndex(elem => elem.Id === Id);
        const partOne = ContactList.slice(0, index);
        const partTwo = ContactList.slice(index + 1);
        const tmpList = [...partOne, ...partTwo];

        apiService.updateDatabse(tmpList);
        RemovedContact(tmpList);
    }

    render() {

        const { Id, Name, Email, Phone, Status, Image, Gender, CurrentContact } = this.props;
        let defaultStatus = "lab lab-warning";
    
        switch (Status) {
            case "Work": defaultStatus = "lab lab-success"; break;
            case "Private": defaultStatus = "lab lab-danger"; break;
            case "Family": defaultStatus = "lab lab-primary"; break;
            case "Friend": defaultStatus = "lab lab-warning"; break;
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
                    <div className={defaultStatus}>{Status}</div>
                </div>
                <div className="field phone">
                    {Phone}
                </div>
                <div className="field email">
                    {Email}
                </div>
                <div className="icons">
                    <Link to="/edit-contact"><i className="far fa-edit fa-2x" onClick={CurrentContact}></i></Link>
                    <i className="far fa-trash-alt fa-2x" onClick={() => this.onClick(Id)}></i>
                </div>
            </div >
        )
    }
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, CurrentContact } = ContactListReducer;
    return { ContactList, CurrentContact };
}

const mapDispatchToProps = {
    RemovedContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

//export default ContactItem;