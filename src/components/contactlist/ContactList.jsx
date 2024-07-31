import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import css from "./contactlist.module.css";

const ContactList = ({handleDelete}) => {
  const contacts = useSelector(selectFilteredContacts); 
  
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}         
        />
      ))}
    </ul>
  );
};

export default ContactList;
