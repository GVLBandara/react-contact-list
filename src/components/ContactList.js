import React from 'react'
import ContactCard from './ContactCard';

const ContactList = ({ contacts, handleDeleteContact }) => {

  return (
    <div className='ui called list'>
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} handleDeleteContact={handleDeleteContact} />
      ))}
    </div>
  )
};

export default ContactList