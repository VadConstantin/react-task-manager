import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function AppFunction() {

  const [newTask, setNewTask] = useState({})
  const [allTasks, setAllTasks] = useState([])

  const handleChange = ({ target }) => {
    const { name, value } = target
    setNewTask((prev) => {
      return { ...prev, id: Date.now(), [name]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) {
      return;
    } else {
      setAllTasks((prev) => {
        return [newTask, ...prev]
      })
    }
  }


  return (
    <main>
      <h1>function Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList
        allTasks={allTasks}
        // handleDelete={ }
      />
    </main>
  );
}
