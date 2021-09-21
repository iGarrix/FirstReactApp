import { useEffect } from "react";
import { connect } from "react-redux";

// Import components
import Contactitem from "./ContactItem/ContactItem";
// Import actions
import { getContactList } from "../../../Actions/ContactListActions";
// Import api service
import apiService from "../../../Services/APIService";

const ContactList = ({ ContactList, getContactList }) => {

    useEffect(() => {
        apiService.fetchContactList().then(data => {
            getContactList(data.List);
        })
    }, []);


    const item = ContactList.map(listItem => {
        return (
            <Contactitem key={listItem.Id}
                {...listItem} />
        )
    });
    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>
    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList } = ContactListReducer;
    return { ContactList };
}

const mapDispatchToProps = {
    getContactList
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);