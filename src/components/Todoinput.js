import React, { useState } from "react";
import Todolist from "./Todolist";

const Todoinput = () => {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  console.log(listTodo);

  const deleteItem = (key) => {
    const newlist = [...listTodo];
    newlist.splice(key, 1);
    setListTodo(newlist);
  };
  const deleteA = () => {
    setListTodo([]);
  };
  const modify = (id) => {
    const newmoddify = [...listTodo];
    setInputText(listTodo[id]);
    deleteItem(id);
    // newmoddify.splice(id, 1, listTodo[id]);
  };

  return (
    <>
      <div className="input-container">
        <form>
          <input
            type="text"
            className="input-box-todo"
            placeholder="Enter your T0-do"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          ></input>
          <button
            className="add-btn"
            onClick={(e) => {
              e.preventDefault();
              setListTodo([...listTodo, inputText]);
              setInputText("");
            }}
          >
            +
          </button>
        </form>
      </div>
      <h1 className="app-heading">TODO</h1>
      <hr></hr>
      {listTodo.map((item, index) => {
        return (
          <Todolist
            item={item}
            key={index}
            setListTodo={setListTodo}
            deleteItem={deleteItem}
            index={index}
            deleteA={deleteA}
            modify={modify}
          ></Todolist>
        );
      })}
    </>
  );
};

export default Todoinput;
