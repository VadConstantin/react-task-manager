import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Parent } from './components/Parent';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList'
import { GuineaPigsContainer } from './components/PigsCarrousselContainer';
import Form from './components/Form';
import NewForm from './components/newForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorPicker />
    <TodoList />
    < Parent />
    {/* < GuineaPigsContainer /> */}
    < Form name="propTypes" />
    < NewForm name="New"/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
