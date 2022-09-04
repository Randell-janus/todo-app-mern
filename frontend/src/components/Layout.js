import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <nav className="border-b pb-4">
        <h1 className="text-2xl sm:text-3xl">MyTodos</h1>
      </nav>

      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
