import { useEffect } from "react";
import { connect } from "react-redux";

// Import components
import Contactitem from "./ContactItem/ContactItem"
// Import actions
import { getContactList, RemovedContact } from "../../../Actions/ContactListActions";
// Import api service
import apiService from "../../../Services/APIService";

const ContactList = ({ ContactList, getContactList, Search, RemovedContact }) => {

    useEffect(() => {
        apiService.fetchContactList().then(data => {
            getContactList(data.List);
        })
        console.log("Fetch");
    }, [])

    const onClick = (Id) => {
        const index = ContactList.findIndex(elem => elem.Id === Id);
        const partOne = ContactList.slice(0, index);
        const partTwo = ContactList.slice(index + 1);
        const tmpList = [...partOne, ...partTwo];


        apiService.updateDatabse(tmpList);
        RemovedContact(tmpList);
    }

    const item = ContactList.filter(el => el.Name.includes(Search)).map(listItem => {
        return (
            <Contactitem key={listItem.Id}
                {...listItem} onClick={onClick} />
        )
    });
    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>
    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, Search } = ContactListReducer;
    return { ContactList, Search };
}

const mapDispatchToProps = {
    getContactList, RemovedContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);