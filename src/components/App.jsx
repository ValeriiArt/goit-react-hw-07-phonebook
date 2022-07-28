import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import s from './App.module.css'


export function App() {

  return (
    <div className={s.container}>
      <h2>Phonebook</h2>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/> 
      </div>
    );
};





