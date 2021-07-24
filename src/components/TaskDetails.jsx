import React from 'react'
import { useHistory, useParams } from 'react-router-dom';

import "./TaskDetails.css";
import Button from './Button';
const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();


    const handleBackButtonClick = () => {
        history.goBack();
    }
    return ( 
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>

        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eos voluptatem, tempora praesentium quo eveniet facere est impedit
                , corporis corrupti voluptatum natus. Exercitationem placeat aliquid be
                atae assumenda neque voluptatibus voluptatum incidunt.

            </p>

        </div>
        </>
     );
}
 
export default TaskDetails;