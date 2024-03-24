import { useState } from "react";
import { INITIAL_CONTACTS } from "./utils/constants";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  const addContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts((prevContacts) => {
      return [...prevContacts, finalContact];
    });
  };

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="titleMain">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
