import React, { useState } from "react";
// Image Imports - Ensure these paths are correct relative to THIS file
import doneimage from "../assets/done.png";
import editimage from "../assets/edit.png";
import deleteimage from "../assets/delete.png";

// Component Imports
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem"; // Needs to be created separately

function Todo() {
  const [todos, setTodos] = useState([]);

  // --- CREATE: Function passed to Addtodo component ---
  const addTodoItem = (newTodoText) => {
    if (newTodoText.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTodoText, isDone: false },
      ]);
    }
  };

  // --- DELETE: Function passed to TodoItem component ---
  const deleteTodo = (idToDelete) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));
  };

  // --- TOGGLE DONE: Function passed to TodoItem component ---
  const toggleDone = (idToToggle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === idToToggle ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // --- EDIT: Function passed to TodoItem component ---
  const editTodo = (idToEdit, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === idToEdit ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">React Todo List</h1>

      {/* 1. Add New Todo Component */}
      <div className="mb-4">
        <Addtodo onAdd={addTodoItem} />
      </div>

      {/* 2. Display the List of Todos */}
      <div className="list-group">
        {todos.length === 0 ? (
          <p className="text-center text-muted">
            No tasks yet. Add one above!{" "}
          </p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {/* Map over the state to render individual TodoItem components */}
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                // Pass functions down to the list item
                onDelete={deleteTodo}
                onToggleDone={toggleDone}
                onEdit={editTodo}
                // Pass image sources down
                doneImage={doneimage}
                editImage={editimage}
                deleteImage={deleteimage}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todo;
