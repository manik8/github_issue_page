import React from "react";

const TaskForm = () => {
  return (
    <form>
      <input type="text" placeholder="Add task" required />
      <div>
        <button type="submit">Add Issue</button>
      </div>
    </form>
  );
};

export default TaskForm;
