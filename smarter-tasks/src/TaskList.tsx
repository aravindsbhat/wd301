import Task from "./Task";


export interface TaskItem {
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
            {props.tasks.map((task:TaskItem,index:number) => {
                return <li className="list-none"><Task key={index} title={task.title} desc={task.desc} dueDate={task.dueDate} onDelete={() => props.deleteTask(index)}/></li>
            })}
        </>
    )
}

export default TaskList;