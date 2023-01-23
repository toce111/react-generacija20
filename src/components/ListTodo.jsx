import { useState } from "react";
import "./css/style.css";

const ListTodo = (props) => {
  const { todos, deleteTodo, markAsCompleted, updateTodoTitle } = props;

  const [displayCompleted, setDisplayCompleted] = useState(true);

  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const style = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
    width: "100%",
    tableLayout: "fixed",
    margin: "10px 0px",
  };
  const redbutton = {
    appearance: "none",
    color: "red",
    border: 0,
    backgroundColor: "#ffff",
  };
  const greenbutton = {
    appearance: "none",
    color: "green",
    border: 0,
    backgroundColor: "#ffff",
  };
  const editbutton = {
    appearance: "none",
    color: "#ffff",
    border: 0,
    backgroundColor: "#ffff",
  };
  const tr = {
    border: "1px solid black",
  };
  const thead = {
    backgroundColor: "#333",
    color: "#ffff",
  };

  const save = () => {
    updateTodoTitle(editId, editTitle);
    setEditId("");
  };

  const cancel = () => {
    setEditId("");
    setEditTitle("");
  };
  return (
    <div>
      <table style={style}>
        <thead style={thead}>
          <tr style={tr}>
            <td>userID</td>
            <td>ID</td>
            <td>Title</td>
            <td>Completed</td>
            <td>Complete</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {todos.map(
            (todo) =>
              (!todo.completed || displayCompleted) && (
                <tr>
                  <td>{todo.userId}</td>
                  <td>{todo.id}</td>
                  {editId && editId === todo.id ? (
                    <td>
                      <textarea
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        size={todo.title.length}
                      />
                      <input type="button" value="Save" onClick={save} />
                      <input type="button" value="Cancel" onClick={cancel} />
                    </td>
                  ) : (
                    <td className={todo.completed ? "mark-as-done" : ""}>
                      {todo.title}
                    </td>
                  )}
                  <td>
                    <input type="checkbox" checked={todo.completed} />
                  </td>
                  <td>
                    <button
                      style={greenbutton}
                      onClick={() => markAsCompleted(todo.id)}
                    >
                      ✓
                    </button>
                  </td>
                  <td>
                    <button
                      style={editbutton}
                      onClick={() => {
                        setEditId(todo.id);
                        setEditTitle(todo.title);
                      }}
                    >
                      ✍
                    </button>
                  </td>
                  <td>
                    <button
                      style={redbutton}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>

      <div>
        <label>Display Completed tasks?</label>
        <input
          type="checkbox"
          checked={displayCompleted}
          onChange={() => setDisplayCompleted(!displayCompleted)}
        />
      </div>
    </div>
  );
};

export default ListTodo;
