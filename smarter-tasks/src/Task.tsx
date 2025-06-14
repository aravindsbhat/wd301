import React from "react";
import "./Task.css";

interface TaskProps {
    title: string;
}
class Task extends React.Component<TaskProps> {
    render(): React.ReactNode {
        return (
            <div className="TaskItem txt-3xl shadow">{this.props.title}</div>
        )
    }
}
export default Task;