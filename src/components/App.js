import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid";
import api from "../api/Contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

import "./App.css";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    // const loadContacts = JSON.parse(
    //   localStorage.getItem('react-contact-list-data')
    // );

    // if (loadContacts) {
    //   setContacts(loadContacts);
    // }
    const getContacts = async () => {
      const loadContacts = await retrieveContacts();
      if (loadContacts) {
        setContacts(loadContacts);
        setSearchResult(loadContacts);
      }
    };
    getContacts();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     'react-contact-list-data',
  //     JSON.stringify(contacts)
  //   );
  // }, [contacts]);

  const addContact = async ({ name, email }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      email: email,
    };
    const response = await api.post("/contacts", newContact);
    setContacts([...contacts, response.data]);
  };

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newList);
  };

  const updateContact = async (contact) => {
    console.log("Update  ", contact);
    const response = await api.put(`/contacts/${contact.id}`, ...contact);
    setContacts(
      contacts.map((contact) => {
        return contact.id === response.data.id
          ? { ...response.data }
          : { contact };
      })
    );
  };

  const searchContact = (searchText) => {
    if (searchText !== "") {
      const result = contacts.filter((contact) => {
        return (contact.name + contact.email)
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setSearchResult(result);
    } else {
      setSearchResult(contacts);
    }
  };

  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchResult}
                handleDeleteContact={deleteContact}
                handleSearch={searchContact}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact handleAddContact={addContact} />}
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route
            path="/edit"
            element={<EditContact handleUpdateContact={updateContact} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
