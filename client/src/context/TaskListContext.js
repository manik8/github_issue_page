import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const IssueListContext = createContext();

const IssueListContextProvider = (props) => {
  const [Issue, setIssue] = useState([
    { name: "Read The Book", description: "Hello", id: 1 },
    { name: "Wash The Car", description: "Hello", id: 2 },
    { name: "Write some code", description: "Hello", id: 3 },
  ]);

  const [editIssue, setEditIssue] = useState(null);
  const addIssue = (name, description) => {
    setIssue([...Issue, { name, description, id: uuidv4() }]);
  };
  const deleteIssue = (id) => {
    setIssue(Issue.filter((issue) => issue.id !== id));
  };

  const findIssue = (id) => {
    const item = Issue.find((issue) => issue.id === id);

    setEditIssue(item);
  };

  const edit = (name, description, id) => {
    const newIssue = Issue.map((issue) =>
      issue.id === id ? { name, description, id } : issue
    );

    setIssue(newIssue);
    setEditIssue(null);
  };
  return (
    <IssueListContext.Provider
      value={{ Issue, addIssue, deleteIssue, findIssue, edit, editIssue }}
    >
      {props.children}
    </IssueListContext.Provider>
  );
};

export default IssueListContextProvider;
