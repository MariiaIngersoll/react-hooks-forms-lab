import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    category: "Produce"
  })

  function handleChange(event) {
    const type = event.target.name
    const value = event.target.value
    setNewItem({...newItem, id: uuid(), [type]: value})
  }

  function handleSubmit(event) {
    event.preventDefault() 
    onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={newItem.category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
