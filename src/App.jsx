import React, { useState } from "react";
import AddTask from "./components/AddTask";

import Tasks from "./components/Tasks";
import "./index.css";

const App = () => {
  // let message = "TODO LIST";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
    {
      id: "3",
      title: "Bruno para cagar",
      Completed: true,
    },
  ]);
  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
