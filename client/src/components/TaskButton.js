import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import { IssueListContext } from "../context/TaskListContext";

Modal.setAppElement("#root");

const TaskButton = ({ post }) => {
  const { addIssue, editIssue, edit } = useContext(IssueListContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [issue, setIssue] = useState({
    name: "",
    desc: "",
  });

  const handleChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIssue === null) {
      addIssue(issue.name, issue.desc);
      setIssue({
        name: "",
        desc: "",
      });
      setModalIsOpen(false);
    } else {
      edit(issue.name, issue.desc, editIssue.id);
      setIssue({
        name: "",
        desc: "",
      });
      setModalIsOpen(false);
    }
  };
  useEffect(() => {
    if (editIssue !== null) {
      issue.name = editIssue.name;
      issue.desc = editIssue.description;
      setModalIsOpen(true);
    } else {
      issue.name = "";
      issue.des = "";
    }
  }, [editIssue]);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="add-issue">
        Add Issue
      </button>
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
            size="50"
            required
          />
          <textarea
            type="text"
            placeholder="Add Issue Description"
            onChange={handleChange}
            value={issue.desc}
            name="desc"
            required
          />
          <div className="buttons">
            <button
              className="btn add-task-btn"
              type="submit"
              className="add-issue"
            >
              {editIssue ? "Edit Issue" : "Add Issue"}
            </button>
          </div>
          {/* <button type="submit" onClick={() => setModalIsOpen(false)}>
            Close
          </button> */}
        </form>
      </Modal>
    </div>
  );
};

export default TaskButton;
