import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import "./CustomForm.css";
const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="todo">
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label"></label>
        <button className="btn" aria-label="Add Task" type="submit">
          <PlusCircleIcon width={24} height={24} />
        </button>
      </div>
    </form>
  );
};
export default CustomForm;
