import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddContact = ({ handleAddContact }) => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addContact = (e) => {
    e.preventDefault();
    //console.log(e);
    if (name === '' || email === '') {
      alert('All fields are mandetory!');
      return;
    }
    console.log(name, ' ', email);
    handleAddContact({ name, email });
    e.target.reset();
    navigate('..')
  };

  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={addContact}>
        <div className='field'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={(event) => setName(event.target.value)} placeholder='Name' />
        </div>
        <div className='field'>
          <label htmlFor="email">Name</label>
          <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} placeholder='Email' />
        </div>
        <div>
          <button type='submit' className='ui button blue'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddContact