import { useState } from "react";
import { useDispatch } from "react-redux";

import { createTodo } from "../features/todos/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    body: "",
    duration: 1,
  });

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo.body || !todo.duration || todo.duration < 1) return;

    dispatch(createTodo(todo));

    setTodo({
      body: "",
      duration: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1 w-full">
        <h3>Task:</h3>
        <textarea
          onKeyPress={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
          onChange={handleInputChange}
          type="text"
          name="body"
          className="input-primary"
          placeholder="study math"
          required
          value={todo.body}
        />
      </div>

      <div className="space-y-1 flex-1">
        <h3>Duration:</h3>
        <input
          onChange={handleInputChange}
          type="number"
          name="duration"
          min="1"
          className="input-primary"
          placeholder="hours"
          required
          value={todo.duration}
        />
      </div>
      <div className="flex justify-end sm:block">
        <button className="btn-primary">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
