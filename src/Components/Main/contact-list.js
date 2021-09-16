import ContactItem from "./contact-item";

const ContactList = ({List, onChangeStatus, Remove, onGetCurrentContact, SearchValue}) => {
    const item = List.map(item => 
    {
        if (item.Name.toLowerCase().indexOf(SearchValue.toLowerCase()) > -1) {          
            return (
                <ContactItem key={item.Id} Obj={item} onChangeStatus={() => onChangeStatus(item.Id)}
                Remove={() => Remove(item.Id)}
                onGetCurrentContact={() => onGetCurrentContact(item.Id)} />
            )
        }
    });
    return (
        <section>
           {item.length > 0 ? item : <h3 className="text-center">Contact list is empty.</h3>}
        </section>
    )
}

export default ContactList;