import React from "react";

import { useHistory } from "react-router-dom";
import {CgClose, CgInfo} from 'react-icons/cg';
import "./Task.css";
const Task = ({ task, handleTaskClick, handleRemoveClick }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }
 return (
   <div className="task-container" style={task.completed ? {borderLeft: '0.6rem solid green'} : {}}
   >
  <div className="task-title" onClick={() => handleTaskClick(task.id)}>
    {task.title}
  </div>

  <div className="buttons-container">
    <button className="remove-task-button" onClick={() => handleRemoveClick(task.id)}>
      <CgClose></CgClose>
      </button>
    <button className="task-details" onClick={handleTaskDetailsClick}
    >
      <CgInfo></CgInfo>
      </button>
  </div>

   </div>
 );
 
 
  // return <div className="task-container">{task.title}</div>;
};

export default Task;
