import React from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
