import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { IssueListContext } from "../context/TaskListContext";

Modal.setAppElement("#root");

const TaskButton = () => {
  const { addIssue } = useContext(IssueListContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [issue, setIssue] = useState({
    name: "",
    desc: "",
  });

  const handleChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
    console.log(issue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIssue(issue.name, issue.desc);
    setIssue({
      name: "",
      desc: "",
    });
  };
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Add Issue</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Project Name"
            onChange={handleChange}
            value={issue.name}
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Add Issue Description"
            onChange={handleChange}
            value={issue.desc}
            name="desc"
            required
          />
          <div>
            <button type="submit">Add Issue</button>
          </div>
          <button type="submit" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TaskButton;
