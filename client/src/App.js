import React from "react";
import TaskList from "./components/TaskList";
import IssueListContextProvider from "./context/TaskListContext";
import TaskButton from "./components/TaskButton";
import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <IssueListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskButton />
            <TaskList />
          </div>
        </div>
      </div>
    </IssueListContextProvider>
  );
};

export default App;
