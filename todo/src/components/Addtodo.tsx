import React, { useState } from "react";
import addimge from "../assets/add.png";

function Addtodo() {
  const [newlist, setnewlist] = useState("");

  const handleChange = (event) => {
    setnewlist(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    onAdd(newlist);

    setnewlist("");
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <input
            value={newlist}
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="btn btn-outline-secondary" type="submit">
            Add <img src={addimge} alt="Add" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Addtodo;
