const ListTodo = (props) => {
  const { todos, deleteTodo, markComplete } = props;
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

  return (
    <div>
      <table style={style}>
        <thead style={thead}>
          <tr style={tr}>
            <td>userID</td>
            <td>ID</td>
            <td>Title</td>
            <td>Completed</td>
            <td>Delete</td>
            <td>Complete</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <input type="checkbox" checked={todo.completed} />
              </td>
              <td>
                <button style={redbutton} onClick={() => deleteTodo(todo.id)}>
                  ❌
                </button>
              </td>
              <td>
                <button style={greenbutton} onClick={() => markComplete(index)}>
                  ✔️
                </button>
              </td>
              <td>
                <button style={editbutton}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
