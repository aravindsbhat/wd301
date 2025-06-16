import React from 'react';
import { useParams } from 'react-router-dom';
import type { TaskItem } from '../TaskList';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface TaskDetailsPageParams extends Record<string,string>{
    id: string;
}

interface TaskState {
    tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
    const {id} = useParams<TaskDetailsPageParams>();
    const [taskState] = useLocalStorage<TaskState>(
        "tasks",
        {
            tasks:[]
        }
    );

    const task = taskState.tasks.find(task=> task.id === Number(id));

    return (
        <div className="text-blue-600 shadow-md rounded-md p-4 m-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-medium">{task?.title}</h3>
          </div>
          <p className="text-gray-600">{task?.desc}</p>
          <p className="text-gray-600">{task? new Date(task.dueDate).toISOString().slice(0,10) : ""}</p>
        </div>
      );
};

export default TaskDetailsPage;