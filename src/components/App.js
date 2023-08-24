import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { nanoid } from 'nanoid';
import api from "../api/Contacts"
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

import './App.css';

function App() {

  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  useEffect(() => {
    // const loadContacts = JSON.parse(
    //   localStorage.getItem('react-contact-list-data')
    // );

    // if (loadContacts) {
    //   setContacts(loadContacts);
    // }
    const getContacts = async () => {
      const loadContacts = await retrieveContacts();
      if (loadContacts) { setContacts(loadContacts)};
    };
      getContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-contact-list-data',
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const addContact = async ({ name, email }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      email: email
    }
    const response = await api.post("/contacts", newContact);
    setContacts([...contacts, response.data]);
  }

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`)
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
