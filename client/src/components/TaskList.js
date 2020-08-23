import React, { useContext } from "react";
import { IssueListContext } from "../context/TaskListContext";
import { Task } from "./Task";

export default function TaskList() {
  const { Issue } = useContext(IssueListContext);
  return (
    <div>
      <ul>
        {Issue.map((issue) => {
          return <Task issue={issue} key={issue.id} />;
        })}
      </ul>
    </div>
  );
}
