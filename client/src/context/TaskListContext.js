import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const IssueListContext = createContext();

const IssueListContextProvider = (props) => {
  const [Issue, setIssue] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      //setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setIssue(res.data);
      //setLoading(false);
    };
    fetchPost();
  }, []);

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
