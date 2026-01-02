import React from "react";
import { Link } from "react-router-dom";

export default function AddDataHome(props) {
  const data = props.data;
  return (
    <>
      <div>
        <h1>Welcome to Home</h1>
        <Link to="/TodoList" title="todoList">
          Todo List
        </Link>
        <br />
        <hr />
        <Link to="/Products" title="Products">
          Product
        </Link>
        <br />
        <hr />
        <Link to="/image" title="Image">
          Image
        </Link>
      </div>
    </>
  );
}