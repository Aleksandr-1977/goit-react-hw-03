import css from './ContactList.module.css';
import Contacts from '../Contact/Contacts';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contacts contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
