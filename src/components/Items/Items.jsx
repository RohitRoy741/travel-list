import classes from "./Items.module.css";
import Item from "./Item";

function Items({ items, onPackItem, onDeleteItem }) {
  const itemElements = items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      quantity={item.quantity}
      packed={item.packed}
      onPackItem={onPackItem}
      onDeleteItem={onDeleteItem}
    />
  ));

  return <ul className={classes["items-list"]}>{itemElements}</ul>;
}

export default Items;
