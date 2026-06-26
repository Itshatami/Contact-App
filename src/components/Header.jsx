import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="#">itsHatami</a> | simple contact app
      </p>
    </div>
  );
};

export default Header;
