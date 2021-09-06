import ContactItem from "./contact-item";

const ContactList = ({List, onChangeStatus, Remove}) => {
    const item = List.map(item => 
    {
        return (
            <ContactItem key={item.Id} Obj={item} onChangeStatus={() => onChangeStatus(item.Id)}
            Remove={() => Remove(item.Id)} />
        )
    });
    return (
        <section>
           {item.length > 0 ? item : <h3 className="text-center">Contact list is empty.</h3>}
        </section>
    )
}

export default ContactList;