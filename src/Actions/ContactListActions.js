export const getContactList = (list) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: list
    }
}

export const AddNewContact = (contact) => {
    return {
        type: "CONTACT_LIST_ADDED",
        payload: contact
    }
}

export const RemovedContact = (contact) => {
    return {
        type: "CONTACT_LIST_REMOVED",
        payload: contact
    }
}