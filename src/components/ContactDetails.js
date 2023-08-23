import React from 'react';
import user from '../images/user.jpg'

const ContactDetails = () => {
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className="image">
                    <img src={user} alt="user" />
                    <div className="content">
                        <div className="header">Gota</div>
                        <div className="description">gota@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
