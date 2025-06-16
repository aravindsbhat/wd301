import "./TaskCard.css";

interface TaskProps {
    title: string;
    desc?: string;
    dueDate: Date;
    onDelete: () => void;
}

const Task = (props: TaskProps) => {

    return (
        <div className="TaskItem">
            <div className="text-3xl shadow">{props.title}</div>
            <div className="">{props.desc}</div>
            <div className="">{props.dueDate? new Date(props.dueDate).toISOString().slice(0,10):""}</div>
            <div>
                <button onClick={props.onDelete} className="deleteTaskButton mt-1">Delete</button>
            </div>
        </div>
    )
}
export default Task;