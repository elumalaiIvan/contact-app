import React, { useEffect } from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  })

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }

  const removeContactHandler = (id) => {
    const newContacts = contacts.filter(contact => { return contact.id !== id })
    setContacts(newContacts)
  }

  useEffect(() => {
    console.log("setting use effect is called" + JSON.stringify(contacts))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <ContactList contacts={contacts} getContactID={removeContactHandler} />
          } />
          <Route path="/add" element={
            <AddContact addContactHandler={addContactHandler} />
          } />
        </Routes>


        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactID={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
