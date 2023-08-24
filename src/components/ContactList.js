import React from 'react'
import { useNavigate } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, handleDeleteContact }) => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <h2>
        Contact List
        <button className='ui button blue right' onClick={() => { navigate('/add') }}>Add Contact</button>
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