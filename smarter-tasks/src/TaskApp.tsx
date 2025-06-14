import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import type { TaskItem } from "./TaskList";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TaskAppProps {}

interface TasAppState {
    tasks: TaskItem[];
}

class TaskApp extends React.Component<TaskAppProps, TasAppState> {
    constructor(props: TaskAppProps) {
        super(props);
        this.state = {
            tasks:[]
        };
    }
    addTask = (task: TaskItem) => {
        this.setState((state) => {
            return {
                tasks: [...state.tasks, task],
            }
        })
    }
    render(): React.ReactNode {
        return (
            <div className="container py-10 max-w-4xl mx-auto">
                <h1 className="text-3xl mb-2 font-bold text-slate-700">
                  Smarter Tasks
                </h1>
                <h1 className="text-lg mb-6 text-slate-600">
                  <span className="font-bold">Project: </span>
                  Graduation Final Year Project (Revamp college website)
                </h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4">
                    <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
                      Pending
                    </h1>
                    <TaskForm addTask={this.addTask}/>
                    <TaskList tasks={this.state.tasks} />
                  </div>
                </div>
            </div>
        );
    }
}

export default TaskApp;