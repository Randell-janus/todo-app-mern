import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getTodos } from "./features/todos/todosSlice";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import TodoPage from "./pages/TodoPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo/:id" element={<TodoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
