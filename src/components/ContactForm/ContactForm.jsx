import { useState } from 'react';
import { useAddContactMutation } from '../../store/contactsAPI';
import { nanoid } from 'nanoid'
import s from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addNewContact] = useAddContactMutation();  


  const handleChange= e => {
    const { name, value } = e.currentTarget;
        
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }; 
  };
  
  const handleAddNewContact = async (e) => {
    e.preventDefault();
    if (name) {
      await addNewContact({
        id: nanoid(4),
        name,
        number,
      }).unwrap();
      setName('');
      setNumber('');
    };
  };

  return (
    <div className={s.form }>
      <form onSubmit={handleAddNewContact}>
        <label className={s.formLabel} >
        Name
            <input
            className={s.formInput}
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.formLabel}>
          Number
            <input
            className={s.formInput}
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>      
    </div>
  );  
};
