import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import type { TaskItem } from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import React from "react";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {

  const [taskState, setTaskState] = useLocalStorage<TaskAppState>(
    "tasks",
    { tasks: [] }
  );

  const idref = React.useRef(0);
  React.useEffect(() => {
    const maxId = Math.max(0, ...taskState.tasks.map(task => task.id ?? 0));
    idref.current = maxId + 1;
  }, []);

  const addTask = (task: Omit<TaskItem,"id">) => {
    const newTask = {...task, id: idref.current++} as TaskItem;
    setTaskState({tasks: [...taskState.tasks, newTask]});
  }

  const deleteTask = (id: number) => {
    const newTasks = taskState.tasks.filter((task)=> task.id !== id);
    setTaskState({tasks: newTasks})
  }

  return (
    <>
    <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-lg mb-6 text-slate-600">
          <span className="font-bold"> Project: </span>
          Graduation Final Year Project (Revamp college website)
          </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={addTask}/>
            <TaskList tasks={taskState.tasks} deleteTask={deleteTask} />
          </div>
        </div>
    </div>
    </>
);
}

export default TaskApp;