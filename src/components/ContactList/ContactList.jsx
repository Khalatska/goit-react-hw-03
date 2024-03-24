import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
