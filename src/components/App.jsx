import React from "react";
import ToDoItem from "./ToDoList"

function App() {
  let [inputText, setInputText] = React.useState("");
  let [listItems, setListItems] = React.useState([]);

  function onChange(event) {
    setInputText(event.target.value);
  }

  function addItems(event) {
    setListItems(prevValues => {
      return [...prevValues, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setListItems(prevValues => {
      return prevValues.filter((item, index) => {
          return (index !== id)
        });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={onChange}/>
        <button type="submit" onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item, index)=> 
          <ToDoItem
            key={index}
            id={index}
            text={item}
            onChecked={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
