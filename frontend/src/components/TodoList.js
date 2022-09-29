import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo } from "../features/todos/todosSlice";
import { formatDate, formatTime, formatWithSeconds } from "../utils/helpers";
import { TrashIcon, PencilIcon } from "./Icons";
import EditModal from "./EditModal";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState("");

  const handleDelete = (todo) => dispatch(deleteTodo(todo));

  const openModal = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="p-6 bg-slate-100 rounded-md hover:bg-slate-200 transition-all relative"
        >
          <EditModal
            isOpen={isModalOpen}
            onClose={onModalClose}
            todo={selectedTodo}
          />

          <div className="absolute top-3 right-3 flex space-x-2">
            <button onClick={() => openModal(todo)}>
              <PencilIcon />
            </button>

            <button onClick={() => handleDelete(todo)}>
              <TrashIcon />
            </button>
          </div>

          <h3 className="font-medium">{todo.body}</h3>

          <p className="mt-1">
            {todo.duration} {todo.duration > 1 ? "hrs" : "hr"}
          </p>

          <p className="mt-2 text-end text-slate-500">
            {formatWithSeconds(todo.createdAt) !==
            formatWithSeconds(todo.updatedAt)
              ? "Updated"
              : "Posted at"}{" "}
            {formatDate(todo.updatedAt)} - {formatTime(todo.updatedAt)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
