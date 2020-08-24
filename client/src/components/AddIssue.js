import React, { Component } from "react";
import axios from "axios";
import IssueList from "./IssueList";
import { Link, Redirect } from "react-router-dom";

export default class AddIssue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description } = this.state;

    try {
      const user = {
        name,
        description,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(user);

      const res = await axios.post("/api/add-issue", body, config);
      console.log(res.data);
      this.props.history.push("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <div className="form-container">
        <div className="header">ADD NEW ISSUE</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-input"
            name="name"
            value={this.state.name}
            placeholder="Project name"
            onChange={this.handleChange}
          />
          <textarea
            className="form-input textarea"
            name="description"
            value={this.state.description}
            placeholder="Issue Description"
            onChange={this.handleChange}
          />
          <input className="submit-button" type="submit" value="Add Issue" />
        </form>
      </div>
    );
  }
}
