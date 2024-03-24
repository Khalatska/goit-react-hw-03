import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <b>
          <p>{contact.name}</p>
        </b>
        <p>{contact.number}</p>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
