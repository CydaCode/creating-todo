import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoState } from './helper/context/Todo-context/TodoState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>
);


