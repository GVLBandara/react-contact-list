import React from 'react'
import ContactCard from './ContactCard';

const ContactList = ({ contacts }) => {

  return (
    <div className='ui called list'>
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  )
};

export default ContactList