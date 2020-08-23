import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const IssueListContext = createContext();

const IssueListContextProvider = (props) => {
  const [Issue, setIssue] = useState([
    { name: "Read The Book", description: "Hello", id: 1 },
    { name: "Wash The Car", description: "Hello", id: 2 },
    { name: "Write some code", description: "Hello", id: 3 },
  ]);

  const addIssue = (name, description) => {
    setIssue([...Issue, { name, description, id: uuidv4() }]);
  };
  return (
    <IssueListContext.Provider value={{ Issue, addIssue }}>
      {props.children}
    </IssueListContext.Provider>
  );
};

export default IssueListContextProvider;
