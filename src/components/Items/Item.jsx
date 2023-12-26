import classes from "./Item.module.css";

function Item({ id, quantity, name, packed, onPackItem, onDeleteItem }) {
  function handleCheckbox() {
    onPackItem(id);
  }

  function handleCrossClick() {
    onDeleteItem(id);
  }

  return (
    <li className={classes["item"]}>
      <input type="checkbox" checked={packed} onChange={handleCheckbox} />
      <span className={packed ? classes["packed"] : ""}>
        {quantity + " " + name}
      </span>
      <span className={classes["cross-icon"]} onClick={handleCrossClick}>&times;</span>
    </li>
  );
}

export default Item;
