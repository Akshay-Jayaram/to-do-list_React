import React from "react";

function ToDoList(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id); //just can't call onChecked
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoList;
