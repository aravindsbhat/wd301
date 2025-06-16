import React, {useState} from "react";
import type { TaskItem } from "./TaskList";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState{
    title: string;
    desc?: string;
    dueDate: Date;
}

const TaskForm = (props: TaskFormProps) => {
    const [formState, setFormState] = useState<TaskFormState>({
        title: "",
        desc: "",
        dueDate: null as unknown as Date
    });

    const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({...formState, title: e.target.value});
    }

    const descChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({...formState, desc: e.target.value});
    }
    const dateChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({...formState, dueDate: e.target.value ? new Date(e.target.value) : null as unknown as Date});
    }
    
    const addTask: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const newTask: TaskItem = {
            title: formState.title,
            desc: formState.desc,
            dueDate: formState.dueDate ? new Date (formState.dueDate) : null as unknown as Date,
        };
        props.addTask(newTask);
        setFormState({ title: "", desc: "", dueDate: null as unknown as Date });
    }

    return (
        <div className="border p-4">
        <form className="mt-2 mb-2 flex flex-col gap-4" onSubmit={addTask}>
            <div  className="flex items-center mb-2">
            <label className="w-32">Task</label>
            <input id="todoTitle" value={formState.title} className="border p-1 flex-1" required type="text" onChange={titleChanged} />
            </div>
            <div className="flex items-center mb-2">
            <label className="w-32">Description</label>
            <input id="todoDescription" value={formState.desc} className="border p-1 flex-1" type="text" onChange={descChanged} />
            </div>
            <div className="flex items-center mb-2">
            <label className="w-32">Due Date</label>
            <input id="todoDueDate" value={formState.dueDate? formState.dueDate.toISOString().slice(0, 10): ""} className="border p-1 flex-1" required type="date" onChange={dateChanged} />
            </div>
            <button className="ml-4" id="addTaskButton" type="submit">Add Item</button>
        </form>
        </div>
    )

}

export default TaskForm;