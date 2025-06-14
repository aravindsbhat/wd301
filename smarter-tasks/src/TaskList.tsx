/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Task from "./Task";


export interface TaskItem {
    title: string;
}

interface State {
}

interface Props {
    tasks: TaskItem[];
}


class TaskList extends React.Component<Props, State> {
    // constructor(props:Props){
    //     super(props);
    //     this.state = {
    //         tasks: []
    //     };
    // }

    // componentDidMount(): void {
    //     const tasks = [{title: "Pay rent"},{title: "Learn React"},{title: "Get a job"}];
    //     this.setState((state, props) => ({tasks}));
    // }

    render(): React.ReactNode {
        return (
            <>
                {this.props.tasks.map((task:TaskItem,index:number) => {
                    return <Task key={index} title={task.title}/>
                })}
            </>
        )

    }
}

export default TaskList;