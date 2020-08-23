import React from "react";

export const Task = ({ issue }) => {
  return (
    <li>
      <span>{issue.name}</span>
      <span> {issue.description}</span>
      <div>
        <button>Delete</button>
      </div>
    </li>
  );
};
