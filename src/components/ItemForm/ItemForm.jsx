import { useState } from "react";
import classes from "./ItemForm.module.css";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(name, quantity);
    setName("");
    setQuantity(1);
  }

  let options = [];
  for (let i = 1; i <= 20; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  return (
    <form className={classes["item-form"]} onSubmit={handleSubmit}>
      <p className={classes["form-label"]}>What do you need for your trip?</p>
      <select
        className={classes["quantity"]}
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      >
        {options}
      </select>
      <input
        type="text"
        placeholder="Item..."
        className={classes["name"]}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit" className={classes["add-btn"]}>
        Add Item
      </button>
    </form>
  );
}

export default ItemForm;
