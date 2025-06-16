import Task from "./Task";


export interface TaskItem {
    id: number;
    title: string;
    desc?: string;
    dueDate: Date;
}

interface Props {
    tasks: TaskItem[];
    deleteTask: (index: number)=> void;
}



const TaskList = (props: Props) => {
    return (
        <>
            {props.tasks.map((task:TaskItem) => {
                return <li key={task.id} className="list-none"><Task item={task} onDelete={() => props.deleteTask(task.id)}/></li>
            })}
        </>
    )
}

export default TaskList;