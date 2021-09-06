import ContactItem from "./contact-item";

const ContactList = ({List}) => {
    const item = List.map(item => 
    {
        return (
            <ContactItem key={item.Id} Obj={item} />
        )
    });
    return (
        <section>
            {item}
        </section>
    )
}

export default ContactList;