import React from "react";
import { TaskItem } from "./TaskItem";
export const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
            task={task}
          />
        ))}
    </ul>
  );
};
