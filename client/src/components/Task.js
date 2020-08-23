import React, { useContext } from "react";
import { IssueListContext } from "../context/TaskListContext";

export const Task = ({ issue }) => {
  const { deleteIssue, findIssue } = useContext(IssueListContext);
  return (
    <div>
      <li className="list-item">
        <i className="far fa-clock">
          {""}
          <div style={{ display: "inline", color: "white" }}>{issue.name}</div>
        </i>

        <div>
          <button
            onClick={() => deleteIssue(issue.id)}
            className="btn-delete task-btn"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            onClick={() => findIssue(issue.id)}
            className="btn-edit task-btn"
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
      <span style={{ color: "#ccc", padding: "6%" }}> {issue.description}</span>
    </div>
  );
};
