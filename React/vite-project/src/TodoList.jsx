import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    if (editIndex !== null) {
      // update existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // add new task
      setTasks([...tasks, { text: newTask, completed: false }]);
    }

    setNewTask("");
  };

  // Toggle complete/incomplete
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Edit task
  const editTask = (index) => {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  };

  return (
    <div className="todo-container" style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Todo List</h2>

      {/* Input + Add Button */}
      <div className="information">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="addButton" onClick={handleAddTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Task List */}
      <ul className="features" style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "8px 0",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </div>

            <div>
              <button onClick={() => editTask(index)}>✏</button>
              <button onClick={() => deleteTask(index)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;