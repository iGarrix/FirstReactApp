import apiService from "../Services/APIService";

const initialState = {
    ContactList: [],
    CurrentContact: null,
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_LIST_ADDED":
            return {
                ...state,
                ContactItem: action.payload
            }
        case "CONTACT_LIST_REMOVED":
            return {
                ...state,
                ContactList: action.payload
            }
    }
    return state;
}

export default ContactListReducer;