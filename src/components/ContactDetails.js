import React from 'react';
import user from '../images/user.jpg'
import { useLocation } from 'react-router-dom';


const ContactDetails = () => {
    const {id, name, email} = useLocation().state.contact;
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className="image">
                    <img src={user} alt="user" />
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
