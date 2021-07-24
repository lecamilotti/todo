import React, { useState } from "react";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import "./index.css";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

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
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {
        ...task, completed: !task.completed};
        return task;
      
    });
    setTasks(newTasks);
  };
  const handleTaskAdd = (taskTitle) =>{
    const newTasks = [
      ...tasks, 
      {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
    },
  ];
    setTasks(newTasks);
  };

  const handleRemoveClick = (taskId) =>{
    const newTasks = tasks.filter( task => task.id !== taskId);
    setTasks(newTasks);
  };



  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
         <>  
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks 
        tasks={tasks} 
        handleTaskClick={handleTaskClick}
        handleRemoveClick={handleRemoveClick}
        />
        </>
        )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails}/>
        
      </div>
    </ Router>
  );
};

export default App;
