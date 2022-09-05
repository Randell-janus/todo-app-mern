import { useEffect } from "react";
import { useSelector } from "react-redux";

import { formatDate, formatTime } from "../utils/helpers";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log(todos);

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div key={todo._id} className="p-8 bg-slate-100 rounded-md">
          <h3 className="font-medium">{todo.body}</h3>
          <p className="mt-2">
            {todo.duration} {todo.duration > 1 ? "hrs" : "hr"}
          </p>
          <p className="mt-4 text-end text-slate-500">
            {todo.createdAt !== todo.updatedAt ? "Updated" : "Posted at"}{" "}
            {formatDate(todo.updatedAt)} - {formatTime(todo.updatedAt)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
