import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        placeholder="Add todo here"
        id="floatingTextarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="d-grid gap-2 col-6 mx-auto mt-3">
        <button className="btn btn-primary" type="button" onClick={handleAdd}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
