import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

import './App.css';

function App() {

  const [contacts,setContacts] =useState([
    {
      id:nanoid(),
      name:'Gota',
      email:'gota@gmail.com'
    },
    {
      id:nanoid(),
      name:'Locker',
      email:'locjer@gmail.com'
    }
  ]);

  const addContact = ({name, email}) => {
    const newContact = {
      id : nanoid(),
      name: name,
      email: email
    }
    const newList = [...contacts, newContact];
    setContacts(newList);
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact handleAddContact={addContact}/>
      <ContactList contacts={ contacts }/>
    </div>
  );
}

export default App;
