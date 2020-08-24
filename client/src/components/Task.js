import React, { useContext } from "react";
import { IssueListContext } from "../context/TaskListContext";

export const Task = ({ post }) => {
  const { deleteIssue, findIssue } = useContext(IssueListContext);
  return (
    <div>
      <li>
        <div className="list-item">
          <div>
            <h2>{post.title}</h2>
            <span> {post.body}</span>
          </div>
          <div className="list-buttons">
            <button
              onClick={() => deleteIssue(post.id)}
              className="btn-delete task-btn"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              onClick={() => findIssue(post.id)}
              className="btn-edit task-btn"
            >
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};
