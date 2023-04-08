import React, { useEffect } from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
import { useState } from 'react';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  })

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    console.log("setting use effect is called" + JSON.stringify(contacts))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
