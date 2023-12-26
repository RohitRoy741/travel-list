import classes from "./Header.module.css";

function Header() {

  return (
    <header className={classes["header"]}>
      <h1 className={classes["app-name"]}>FAR AWAY</h1>
    </header>
  )
}

export default Header;
