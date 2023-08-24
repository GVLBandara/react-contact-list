import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { nanoid } from 'nanoid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

import './App.css';

function App() {

  const [contacts, setContacts] = useState([
    {
      id: nanoid(),
      name: 'Gota',
      email: 'gota@gmail.com'
    },
    {
      id: nanoid(),
      name: 'Locker',
      email: 'locker@gmail.com'
    }
  ]);

  useEffect(() => {
    const loadContacts = JSON.parse(
      localStorage.getItem('react-contact-list-data')
    );

    if (loadContacts) {
      setContacts(loadContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-contact-list-data',
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const addContact = ({ name, email }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      email: email
    }
    const newList = [...contacts, newContact];
    setContacts(newList);
  }

  const deleteContact = (id) => {
    const newList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newList);
  }

  return (
    <div className='ui container'>
      <Router>
        <div><Header /></div>
        <Routes>
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/" element={<ContactList contacts={contacts} handleDeleteContact={deleteContact} />} />
          <Route path="/add" element={<AddContact handleAddContact={addContact} />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
