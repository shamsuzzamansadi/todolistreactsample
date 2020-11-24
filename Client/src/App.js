import React from "react";
import "./App.css";
import axios from "axios";
//todo-list task function
function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => removeTask(index)}>x</button>
      </div>
    </div>
  );
}

//todolist form
function TodoForm({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

axios({
  method: 'get',
  headers: { 'Content-Type': 'application/json'},
  url: 'http://localhost:3001/text'
}).then(function (response) {
  console.log(response.data);
});
                          

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: "Sample hello",
      isCompleted: false
    },
    {
      text: "new to react",
      isCompleted: false
    },
    {
      text: "Have Fun!",
      isCompleted: false
    }
  ]);
  
  // add task to the todolist
  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

// this is the completetask functionality for the complete button
  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };

  // this is the removetask funciton for removing the task from the list
  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
        <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;