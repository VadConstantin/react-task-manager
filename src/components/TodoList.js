import React, { useState } from 'react'
import './task.css'

const TodoList = () => {

  const [ task, setTask ] = useState({})
  const [ taskList, setTaskList ] = useState([{title: "clean the house"}])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setTask( {[name]: value, date: Date.now()} )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setTaskList((prev) => {
      return [task, ...prev]
    })
    setTask({})
  }

  const handleDelete = (taskToDelete) =>  {
    setTaskList((prev) => {
      return prev.filter(t => t.title !== taskToDelete.title)
    })
  }

  return(
    <div className="container">

      <form onSubmit={onSubmit}>
        <label htmlFor="todo">To do :  </label>
        <input
          name="title"
          onChange={handleChange}
          type="text"
          id="todo"
          placeholder="walk the dog"
          value={task.title || ''}
          />
        <button type="submit"> Add </button>
      </form>

      <div className="task-list">
        <p>List of tasks:</p>
        <ul>
        {taskList.map((task) => {
          return <li key={task.title} className="task">
            {task.title}
            <small className="date">
              {task.date ? ` created on ${new Date(task.date).toLocaleString()} ` : ' '}
            </small>
            <button className="delete-button" onClick={() => handleDelete(task)}>  X</button>
          </li>

        })}
        </ul>
      </div>

    </div>
  )

}

export default TodoList;
