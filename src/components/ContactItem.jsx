const ContactItem = ({ data: { id, name, lastname, email, phone }, deleteHandler }) => {
  return (
    <li>
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
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
};

export default ContactItem;
