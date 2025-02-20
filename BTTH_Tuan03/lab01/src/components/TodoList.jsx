import { useState } from "react";
import "./TodoList.css"; // Import CSS

const TodoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState(""); 

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); 
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={addTask} className="add-button">Thêm</button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t}
            <button onClick={() => deleteTask(index)} className="remove-button">Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
