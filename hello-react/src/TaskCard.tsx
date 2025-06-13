import "./TaskCard.css"

interface TaskCardProps {
  title?: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName?: string;
}
import React from "react";
const TaskCard: React.FC<TaskCardProps> = (props) => {
    return (
      <div className="TaskItem mb-4 ">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {props.dueDate && <p> Due on: {props.dueDate}</p>}
        {props.completedAtDate && <p> Completed on: {props.completedAtDate}</p>}
        {props.assigneeName && <p>Assignee: {props.assigneeName}</p>}
      </div>
    );
  }

  export default TaskCard;