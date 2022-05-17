import React from "react";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h4>{title}</h4>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}
