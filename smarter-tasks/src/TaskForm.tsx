import React from "react";
import type { TaskItem } from "./TaskList";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState{
    title: string;
    desc?: string;
    dueDate: Date;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            dueDate: null as unknown as Date
        }
    }

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            desc: this.state.desc,
            dueDate: this.state.dueDate,
        };
        this.props.addTask(newTask);
        this.setState({ title: "", desc: "", dueDate: new Date()});
    };

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ title: e.target.value });
    }

    descChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ desc: e.target.value });
    }

    dateChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ dueDate: e.target.value ? new Date(e.target.value): null as unknown as Date });
    }

    render(): React.ReactNode {
        return (
            <div className="border p-4">
            <form className="mt-2 mb-2 flex flex-col gap-4" onSubmit={this.addTask}>
                <div  className="flex items-center mb-2">
                <label className="w-32">Task</label>
                <input id="todoTitle" className="border p-1 flex-1" required type="text" value={this.state.title} onChange={this.titleChanged} />
                </div>
                <div className="flex items-center mb-2">
                <label className="w-32">Description</label>
                <input id="todoDescription" className="border p-1 flex-1" type="text" value={this.state.desc} onChange={this.descChanged} />
                </div>
                <div className="flex items-center mb-2">
                <label className="w-32">Due Date</label>
                <input id="todoDueDate"className="border p-1 flex-1" required type="date" value={this.state.dueDate? this.state.dueDate.toISOString().slice(0, 10): ""} onChange={this.dateChanged} />
                </div>
                <button className="ml-4" id="addTaskButton" type="submit">Add Item</button>
            </form>
            </div>
        )
    }
}
export default TaskForm;