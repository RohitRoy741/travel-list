import Items from "../Items/Items";
import ItemActions from "../ItemActions/ItemActions";

import classes from "./Main.module.css";

function Main({
  items,
  onPackItem,
  onDeleteItem,
  onClearList,
  onDescriptionSort,
  onStatusSort,
  onOrderSort,
}) {
  return (
    <main className={classes["main"]}>
      <Items
        items={items}
        onPackItem={onPackItem}
        onDeleteItem={onDeleteItem}
      />
      <ItemActions
        onClearList={onClearList}
        onDescriptionSort={onDescriptionSort}
        onStatusSort={onStatusSort}
        onOrderSort={onOrderSort}
      />
    </main>
  );
}

export default Main;
