import { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../constants/input";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    setContacts((contacts) => [...contacts, contact]);
    if (!contact.name || !contact.lastname || !contact.email || !contact.phone) {
      setAlert("Please enter valid data!");
    } else {
      setAlert("");
    }
    setContact({ name: "", lastname: "", email: "", phone: "" });
  };

  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add</button>
      </div>
      {setAlert && (
        <div>
          <p>{alert}</p>
        </div>
      )}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;
