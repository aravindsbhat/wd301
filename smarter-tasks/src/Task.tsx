import React from "react";
import "./TaskCard.css";

interface TaskProps {
    title: string;
    desc?: string;
    dueDate: Date;
}

class Task extends React.Component<TaskProps> {
    render(): React.ReactNode {
        return (
            <div className="TaskItem">
                <div className="text-3xl shadow">{this.props.title}</div>
                <div className="">{this.props.desc}</div>
                <div className="">{this.props.dueDate.toLocaleDateString()}</div>
            </div>
        )
    }
}
export default Task;