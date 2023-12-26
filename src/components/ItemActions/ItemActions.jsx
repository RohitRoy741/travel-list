import classes from "./ItemActions.module.css";

function ItemActions({ onClearList, onDescriptionSort, onStatusSort, onOrderSort }) {
  function handleClearClick() {
    const response = confirm("Are you sure that you want to clear the list?");
    if (response) {
      onClearList();
    }
  }

  function handleSort(event) {
    console.log(event.target.value);
    if (event.target.value === "description") {
      onDescriptionSort();
    } else if (event.target.value === "status") {
      onStatusSort();
    } else if(event.target.value === "input-order") {
      onOrderSort();
    }
  }

  return (
    <div className={classes["item-actions"]}>
      <select className={classes["sorting-options"]} onChange={handleSort}>
        <option value={"input-order"}>SORT BY INPUT ORDER</option>
        <option value={"description"}>SORT BY DESCRIPTION</option>
        <option value={"status"}>SORT BY PACKED STATUS</option>
      </select>

      <button className={classes["clear-btn"]} onClick={handleClearClick}>
        CLEAR LIST
      </button>
    </div>
  );
}

export default ItemActions;
