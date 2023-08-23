import React from 'react'
import user from '../images/user.jpg'
import { Link } from 'react-router-dom';

const ContactCard = ({ contact, handleDeleteContact }) => {

  const deleteContact = () => {
    handleDeleteContact(contact.id);
  }

  console.log(contact);
  return (
    <div className="item" key={contact.id}>
      <img src={user} alt="uder dp" className="ui avatar image" />
      <div className="content">
        <Link to={`/contact/${contact.id}`}>
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={deleteContact}
        style={{ color: "red", marginTop: "7px" }}
      />
    </div>
  );
};

export default ContactCard