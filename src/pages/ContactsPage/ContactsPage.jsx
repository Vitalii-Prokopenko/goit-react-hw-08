import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { deleteContact } from "../../redux/contacts/operations";
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./contactspage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.pageWrap}>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {contacts.length > 0 && (
        <ContactList handleDelete={handleDelete} style={{ width: "100%" }} />
      )}
    </div>
  );
};

export default ContactsPage;
