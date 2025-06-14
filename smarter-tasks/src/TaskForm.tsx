import React from "react";
import type { TaskItem } from "./TaskList";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState{
    title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: ""
        };
    }

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
        };
        this.props.addTask(newTask);
        this.setState({ title: "" });
    };

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ title: e.target.value });
    }

    render(): React.ReactNode {
        return (
            <>
            <form className="mt-2 mb-2" onSubmit={this.addTask}>
                <input className="border" type="text" value={this.state.title} onChange={this.titleChanged} />
                <button className="ml-4" type="submit">Add Item</button>
            </form>
            </>
        )
    }
}
export default TaskForm;