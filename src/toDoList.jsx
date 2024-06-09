import React, { useState } from "react";
import "./toDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(idx) {
    let updateTask = tasks.filter((_, i) => i !== idx);
    setTasks(updateTask);
  }

  function moveTaskUp(idx) {
    if (idx > 0) {
      let updatedTasks = [...tasks];
      [updatedTasks[idx], updatedTasks[idx - 1]] = [
        updatedTasks[idx - 1],
        updatedTasks[idx],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(idx) {
    if (idx < tasks.length - 1) {
      let updatedTasks = [...tasks];
      [updatedTasks[idx], updatedTasks[idx + 1]] = [
        updatedTasks[idx + 1],
        updatedTasks[idx],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="main">
        <h1>To-Do List</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInput}
          />
          <button className="AddBtn" onClick={addTask}>Add</button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li className="taskList" key={index}>
              <span>{task}</span>
              <button className="deleBtn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="moveBtn" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button className="moveBtn" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
