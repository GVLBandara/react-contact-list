import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ handleUpdateContact }) => {
  const navigate = useNavigate();
  const contact = useLocation().state.contact;

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const updateContact = (e) => {
    const id = contact.id;
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandetory!");
      return;
    }
    console.log(name, " ", email);
    handleUpdateContact({ id, name, email });
    e.target.reset();
    navigate("..");
  };

  return (
    <div className="editContactWrapper">
      <div className="editContact">
        <h2>Edit Contact</h2>
        <form onSubmit={updateContact}>
          <div className="field">
            {/* <label htmlFor="name">Name</label> */}
            <input
              className="inputText"
              type="text"
              name="name"
              defaultValue={contact.name}
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="field">
            {/* <label htmlFor="email">Name</label> */}
            <input
              type="text"
              name="email"
              defaultValue={contact.email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="ui button blue">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
