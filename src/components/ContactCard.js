import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = ({ contact, handleDeleteContact }) => {
  const navigate = useNavigate();

  const deleteContact = () => {
    handleDeleteContact(contact.id);
  };

  //console.log(contact);
  return (
    <div className="contactRow" key={contact.id}>
      <div className="contactNameEmailWrapper">
        <img src={user} alt="uder dp" className="contactImage" width={25} />
        <div className="contactNameEmail">
          <div
            className="constent"
            onClick={() => {
              navigate(`/contact/${contact.id}`, { state: { contact: contact } });
            }}
          >
            <div className="header">{contact.name}</div>
            <div className='contactEmail'>{contact.email}</div>
          </div>
        </div>
      </div>
      <div>
        <i
          className="trash alternate outline icon"
          onClick={deleteContact}
          style={{ cursor: "pointer", color: "#ff0000bb", marginTop: "7px", marginRight: "20px" }}
        />
        <i
          className="edit alternate outline icon"
          onClick={() => {
            navigate(`/edit`, { state: { contact } });
          }}
          style={{ cursor: "pointer", color: "#ffffff88", marginTop: "7px" }}
        />
      </div>
    </div>
  );
};

export default ContactCard;
