import "./taskCard.css"
const TaskCard = (props) => {
    return (
      <div className="TaskItem mb-4 ">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {props.dueDate ? <p> Due on:{props.dueDate}</p> : <p> Completed on:{props.completedAtDate}</p>}
        <p>Assignee: {props.assignee}</p>
      </div>
    )
  }

  export default TaskCard;