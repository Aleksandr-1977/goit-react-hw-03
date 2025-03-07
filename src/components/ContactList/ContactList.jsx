import css from './ContactList.module.css';
import Contacts from '../Contact/Contacts';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.container}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contacts}>
          <Contacts data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
