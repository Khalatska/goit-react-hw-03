import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
