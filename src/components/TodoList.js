import React, { useEffect, useState } from 'react'
import './task.css'

const TodoList = () => {

  const [ task, setTask ] = useState({})
  const [ taskList, setTaskList ] = useState([])
  const [ url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos?_limit=1')
  const [ isPending, setIspending ] = useState(true)

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setTask( {[name]: value, id: Date.now()} )
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
      return prev.filter(t => t.id !== taskToDelete.id)
    })
  }

  useEffect(() => {
    fetch(url)
      .then (resp => resp.json())
      .then (data => {
        console.log(data);
        // setTaskList(data)
        setIspending(false)
      })
  }, [url])

  return(
    <div className="container">

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="todo">Enter a task </label>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            id="todo"
            placeholder="walk the dog"
            value={task.title || ''}
            className="form-control"
            />
        </div>
        <button className="btn btn-primary" type="submit"> Add </button>
      </form>

      <div className="task-list">
        <p>List of tasks:</p>
        <ul>
        {isPending && <div>Loading...</div>}
        {!isPending && taskList.map((task) => {
          return <li key={task.id} className="task display-flex">
            <div className="task-infos">
              {task.title}
              <small className="date">
                {task.id ? ` created on ${new Date(task.id).toLocaleString()} ` : ' '}
              </small>
            </div>
            <button className="delete-button" onClick={() => handleDelete(task)}>  X</button>
          </li>
        })}
        </ul>
      </div>

    </div>
  )

}

export default TodoList;
