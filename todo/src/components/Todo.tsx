import doneimage from "../assets/done.png";
import editimage from "../assets/edit.png";
import deleteimage from "../assets/delete.png";

const todos = ["Sample Task 1", "Sample Task 2", "Sample Task 3" ];


const deletebutton = () => {

}

function Todo() {
  return (
    <>
      <h1>Todo List</h1>
      {todos.length === 0 && <p>no todo</p>}
      <ul>
        {todos.map((todo , index ) => (
          <li key={todo}>{todo}
          <button  >done <img src={doneimage} alt="done"  /> </button>
          <button>edit <img src={editimage} alt="edit" /> </button>
          <button onClick={deletebutton}>delete<img src={deleteimage} alt="delete"  /></button>
          
          </li>
          
        ))}
      </ul>
    </>
  );
}
export default Todo;
