import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import IssueListContextProvider from "./context/TaskListContext";
import TaskButton from "./components/TaskButton";
import "./App.css";
import { Header } from "./components/Header";
import axios from "axios";

import Pagination from "./components/Pagination";

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setPost(res.data);
  //     setLoading(false);
  //   };
  //   fetchPost();
  // }, []);

  console.log(post);
  // Get Current Post

  const indexOfLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexofFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <IssueListContextProvider>
      <div className="container mt-5">
        <h1 className="text-success mb-3">GitHub Issue Page</h1>
        <TaskButton post={post} />
        <div className="container mt-5">
          <TaskList post={currentPost} loading={loading} />
          <Pagination
            postPerPage={postPerPage}
            totalPost={post.length}
            paginate={paginate}
          />
        </div>
      </div>
    </IssueListContextProvider>
  );
};

export default App;
