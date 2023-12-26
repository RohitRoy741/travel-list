import classes from "./Footer.module.css";

function Footer({ done, total }) {
  return (
    <footer className={classes["footer"]}>
      <p>
        You have {total} items on your list and you have already packed {done} (
        {total !== 0 ? Math.floor((done / total) * 100) : 0}%)
      </p>
    </footer>
  );
}

export default Footer;
