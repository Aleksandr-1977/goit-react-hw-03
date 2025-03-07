import { useState } from 'react';
import './App.css';
// import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
