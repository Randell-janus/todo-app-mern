import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodos } from "./features/todos/todosSlice";

import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import EmptySection from "./components/EmptySection";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Layout>
      <main className="homepage-container">
        <section className="todolist-container">
          {!todos.length ? <EmptySection /> : <TodoList />}
        </section>

        <section className="md:flex-1 space-y-4">
          <h2>Add Todo</h2>
          <TodoForm />
        </section>
      </main>
    </Layout>
  );
}

export default App;
