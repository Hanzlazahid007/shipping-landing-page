import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { AiTwotoneEdit } from "react-icons/ai";

const Todolist = ({ item, deleteItem, index, modify }) => {
  return (
    <>
      <div className="list-item">
        <li id="dataedit">
          {item}
          <span className="icons">
            <AiFillDelete
              className="icon-delete"
              onClick={(e) => deleteItem(index)}
            />
          </span>

          <span className="left-padding">
            <AiTwotoneEdit
              className="icon-delete"
              onClick={(e) => modify(index)}
            />
          </span>
        </li>
      </div>
    </>
  );
};

export default Todolist;
