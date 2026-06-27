import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <div>
      <h3>list of contacts</h3>
      {contacts ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
          ))}
        </ul>
      ) : (
        <p>"no contact"</p>
      )}
    </div>
  );
};

export default ContactList;
