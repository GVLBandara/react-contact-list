import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, handleDeleteContact, handleSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <h2>
        Contact List
        <button
          className="ui button blue right"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Contact
        </button>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            className="prompt"
            placeholder="Search Contact"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui called list">
        {Object.keys(contacts).length > 0
          ? contacts.map((contact) => (
              <ContactCard
                contact={contact}
                key={contact.id}
                handleDeleteContact={handleDeleteContact}
              />
            ))
          : "No contacts available!"}
      </div>
    </div>
  );
};

export default ContactList;
