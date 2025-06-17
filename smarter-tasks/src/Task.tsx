import { useNavigate } from "react-router-dom";
import "./TaskCard.css";
import type { TaskItem } from "./TaskList";

interface TaskProps {
    item: TaskItem;
    onDelete: () => void;
}

const Task = (props: TaskProps) => {

    const {item, onDelete} = props;
    const navigate = useNavigate();

    return (
        <div className="TaskItem">
            
            <a href={`/tasks/${item.id}`}><div onClick={()=>navigate(`/tasks/${item.id || ""}`)} className="text-3xl shadow cursor-pointer">{item.title}</div></a>
            <div className="">{item.desc}</div>
            <div className="">{item.dueDate? new Date(item.dueDate).toISOString().slice(0,10):""}</div>
            <div>
                <button onClick={onDelete} className="deleteTaskButton mt-1">Delete</button>
            </div>
        </div>
    )
}
export default Task;