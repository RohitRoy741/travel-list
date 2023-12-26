import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ItemForm from "./components/ItemForm/ItemForm";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const data = [
  {
    id: 1,
    name: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    name: "Toothbrush",
    quantity: 2,
    packed: true,
  },
  {
    id: 3,
    name: "Boarding Pass",
    quantity: 1,
    packed: false,
  },
];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const total = items.length;
  const done = items.filter((item) => item.packed).length;

  function handleAddItem(name, quantity) {
    let id;
    if (items.length === 0) {
      id = 1;
    } else {
      id = items[items.length - 1].id + 1;
    }

    const item = { id, name, quantity, packed: false };
    setItems((prevItems) => [...prevItems, item]);

    console.log(items);
  }

  function handlePackItem(id) {
    const tempItems = items.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        return { ...item, packed: !item.packed };
      }
    });
    setItems(tempItems);
  }

  function handleDeleteItem(id) {
    const tempItems = items.filter((item) => item.id !== id);
    setItems(tempItems);
  }

  function handleClearList() {
    setItems([]);
  }

  function handleDescriptionSort() {
    const tempItems = items.slice().sort((item1, item2) => {
      if (item1.name > item2.name) {
        return 1;
      } else if (item1.name < item2.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setItems(tempItems);
  }

  function handleOrderSort() {
    const tempItems = items.slice().sort((item1, item2) => item1.id - item2.id);
    setItems(tempItems);
  }

  function handleStatusSort() {
    const tempItems = items.slice().sort((item1, item2) => {
      if (item1.packed && !item2.packed) {
        return 1;
      } else if (!item1.packed && item2.packed) {
        return -1;
      } else {
        return 0;
      }
    });
    setItems(tempItems);
  }

  return (
    <>
      <Header />
      <ItemForm onAddItem={handleAddItem} />
      <Main
        items={items}
        onPackItem={handlePackItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
        onDescriptionSort={handleDescriptionSort}
        onStatusSort={handleStatusSort}
        onOrderSort={handleOrderSort}
      />
      <Footer done={done} total={total} />
    </>
  );
}

export default App;
