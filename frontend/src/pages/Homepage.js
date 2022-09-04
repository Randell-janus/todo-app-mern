import React from "react";
import { useSelector } from "react-redux";

import EmptySection from "../components/EmptySection";
import TodoList from "../components/TodoList";

const Homepage = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <main className="homepage-container">
      <section className="todolist-container">
        {!todos.length ? <EmptySection /> : <TodoList />}
      </section>

      <section className="md:flex-1 space-y-4">
        <h2>Add Todo</h2>

        <form className="space-y-4">
          <div className="space-y-1 w-full">
            <h3>Task:</h3>
            <textarea
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
              type="text"
              className="input-primary"
              placeholder="study math"
            />
          </div>

          <div className="space-y-1 flex-1">
            <h3>Duration:</h3>
            <input
              type="number"
              className="input-primary"
              placeholder="hours"
            />
          </div>
          <div className="flex justify-end sm:block">
            <button className="btn-primary">Add Todo</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Homepage;
