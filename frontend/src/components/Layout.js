import React from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div className="page-container">
      <nav className="border-b pb-4">
        <h1 className="text-2xl sm:text-3xl flex items-start">
          MyTodos{" "}
          <span className="text-sm sm:text-base ml-2">{`(${todos.length})`}</span>
        </h1>
      </nav>

      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
