import React, { useState } from "react";

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
      <div className="container"></div>
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
