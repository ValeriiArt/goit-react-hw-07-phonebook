import { useSelector } from "react-redux";
import ContactItem from "components/ContactItem";
import {useGetContactsQuery } from '../../store/contactsAPI';
// import s from './ContactList.module.css'


const ContactList = () => {
  const search = useSelector(state => state.contacts.filter);
  const { data =[], isLoading } = useGetContactsQuery();
  
  const findContact = () => {
    const result = data && data.filter(contact =>
      contact.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    return result;
  };

  const contacts = findContact();

  if (isLoading) return <div>Loading...</div>

  return (
      <ul>
      {contacts && contacts.map(contact =>
        <ContactItem key={contact.id} {...contact} />
      )}   
      </ul>
  )
};

export default ContactList;
