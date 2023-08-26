import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, handleDeleteContact, handleSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="contactList">
      <div className="contactListHeader">
        <h2>
          Contact List
        </h2>
        <div className="ui search ">
          <div className="ui icon input searchBar">
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
      </div>
      <div className="ui called list scrollable">
        {Object.keys(contacts).length > 0
          ? contacts.map((contact) => (
            <ContactCard
              contact={contact}
              key={contact.id}
              handleDeleteContact={handleDeleteContact}
            />
          ))
          : <div className="noContactsAvailable">No contacts available!</div>}
      </div>
      <div className="btnAddContactWrapper">
        <button
          className="btnAddContact"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default ContactList;
