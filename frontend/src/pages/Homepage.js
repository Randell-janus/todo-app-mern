import React from "react";
import { useSelector } from "react-redux";

import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import EmptySection from "../components/EmptySection";

const Homepage = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <main className="homepage-container">
      <section className="todolist-container">
        {!todos.length ? <EmptySection /> : <TodoList />}
      </section>

      <section className="md:flex-1 space-y-4">
        <h2>Add Todo</h2>

        <TodoForm />
      </section>
    </main>
  );
};

export default Homepage;
