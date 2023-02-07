import "./TodoItem.css";

const TodoItem = (props) => {

    const deleteTodo = () => {
        props.onCheck(props.id);
      };

  return (
    <div className="todo" >
      <input type="checkbox" ></input>
      <label onClick={deleteTodo}>{props.text}</label>
    </div>
  );
};

export default TodoItem;
