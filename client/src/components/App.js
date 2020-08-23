import React from "react";
import TaskList from "./TaskList";
import IssueListContextProvider from "../context/TaskListContext";
import TaskButton from "./TaskButton";
import TaskForm from "./TaskForm";

const App = () => {
  return (
    <IssueListContextProvider>
      <div>
        <TaskButton />
        <TaskList />
      </div>
    </IssueListContextProvider>
  );
};

export default App;
