const ContactItem = ({ data: { id, name, lastname, email, phone } }) => {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{lastname}</p>
      <p>
        <span>📪</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button>🗑</button>
    </li>
  );
};

export default ContactItem;
