import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, handleDeleteContact }) => {

  return (
    <div className='main'>
      <h2>
        Contact List
        <Link to="/add">
          <button className='ui button blue right'>Add Contact</button>
        </Link>
      </h2>
      <div className='ui called list'>
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} handleDeleteContact={handleDeleteContact} />
        ))}
      </div>
    </div>
  )
};

export default ContactList