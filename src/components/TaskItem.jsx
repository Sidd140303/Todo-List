import { useState } from "react";
import "./TaskItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckedBoxChange = () => {
    setIsChecked(!isChecked);
    toggleTask(task.id)
  };

  return (
    <li
      style={{ listStyleType: "none", marginBottom: "10px", display: "grid" }}
    >
      <div
        className="task-container"
        style={{
          width: "30%",
          height: "50px",
          backgroundColor: "rgb(74, 180, 255)",
          margin: "0 auto",
          marginLeft: "auto",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={isChecked}
          name={task.name}
          onChange={handleCheckedBoxChange}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={isChecked ? "strikethrough" : ""}
          style={{ marginLeft: "10px" }}
        >
          {task.name}
        </label>
        <div className="iconcon">
          <button
            className="btned"
            aria-label={`Delete ${task.name} Task`}
            onClick={()=>enterEditMode(task)}
          >
            <PencilIcon width={24} height={24} />
          </button>
          <button
            className="btn"
            aria-label={`Delete ${task.name} Task`}
            onClick={()=>deleteTask(task.id)}
          >
            <TrashIcon width={24} height={24} />
          </button>
        </div>
      </div>
    </li>
  );
};
