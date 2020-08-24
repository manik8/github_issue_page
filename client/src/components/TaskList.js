import React, { useContext } from "react";
import { IssueListContext } from "../context/TaskListContext";
import { Task } from "./Task";

export default function TaskList({ post }) {
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  const { Issue } = useContext(IssueListContext);
  return (
    // <div>
    //   <ul className="list">
    //     {Issue.map((issue) => {
    //       return <Task issue={issue} key={issue.id} />;
    //     })}
    //   </ul>
    // </div>
    <ul className="list-group mb-4">
      {post.map((post) => {
        return (
          <Task key={post.id} className="list-group-item" post={post}></Task>
        );
      })}
    </ul>
  );
}
