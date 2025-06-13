// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import TaskCard from "./TaskCard";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center min-h-screen w-screen">
      <div className="w-full max-w-5xl mx-auto mb-4 text-left">
        <h1 className="mb-4">Smarter Tasks</h1>
        <p>Project: Graduation Final Year Project (Revamp College Website)</p>
      </div>
      <div className="flex justify-center gap-10 w-full max-w-5xl mx-auto">
        <div className="border-2 flex flex-col min-h-screen grow flex-1 border-gray-300 rounded-xl p-4 h-full pr-1 pl-1 pt-1 pb-10">
          <h2 className="text-center text-xl font-semibold mb-4">Pending</h2>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"/>
          <TaskCard title="Add blog" dueDate="22nd March" assigneeName ="Rohit M"/>
          <button className="mt-4 border rounded px-4 py-2 text-gray-600 text-left hover:bg-gray-100">
            + New Task
          </button>
        </div>
        <div className="ml-10 flex flex-col min-h-screen flex-1 grow border-2 border-gray-300 rounded-xl p-4 h-full pr-1 pl-1 pt-1 pb-10">
          <h2 className="text-center text-xl font-semibold mb-4">Done</h2>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"/>
          <TaskCard title="Get approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
        </div>
      </div>
    </div>
  )
}



export default App;
