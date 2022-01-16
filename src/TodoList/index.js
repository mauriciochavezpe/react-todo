import "./TodoList.css";
const TodoList = (props) => {
  return (
    <section className="box-todo">
      <div className="box-todo--list">
        <ul className="list"> {props.children} </ul>
      </div>
    </section>
  );
};

export { TodoList };
