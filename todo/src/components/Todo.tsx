import React, { useState } from "react";
import doneimage from "../assets/done.png";
import editimage from "../assets/edit.png";
import deleteimage from "../assets/delete.png";
import AddTodo from "./AddTodo";

function Todo() {
  const [todos, setTodos] = useState([
    "Sample Task 1",
    "Sample Task 2",
    "Sample Task 3",
  ]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSave = () => {
    const updated = [...todos];
    updated[editIndex] = editText;
    setTodos(updated);
    setEditIndex(-1);
    setEditText("");
  };

  const handleDone = (index) => {
    alert(`Marked "${todos[index]}" as done ✅`);
  };

  
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center mb-4">Todo List</h1>

    
      {todos.length === 0 && <p>No todos yet...</p>}

     
      <ul className="list-group d-flex align-items-center">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center mb-3"
            style={{
              width: "40%",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)", 
              borderRadius: "10px",
            }}
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  className="form-control me-3"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="btn btn-success btn-sm"
                  onClick={handleSave}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{todo}</span>
                <div>
                  <button
                    className="btn btn-outline-success btn-sm me-1"
                    onClick={() => handleDone(index)}
                  >
                    <img src={doneimage} alt="done" width={18} />
                  </button>
                  <button
                    className="btn btn-outline-warning btn-sm me-1"
                    onClick={() => handleEdit(index)}
                  >
                    <img src={editimage} alt="edit" width={18} />
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    <img src={deleteimage} alt="delete" width={18} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* 👇 AddTodo moved here at the bottom */}
      <div className="mt-4">
        <AddTodo onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default Todo;
