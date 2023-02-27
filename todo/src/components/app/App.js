import './App.scss';
import React, { useState } from 'react';
import Todo from '../todo/Todo';
import Input from '../input/Input';

function App() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // When the add button is clicked
  function addItem(inputText) {
    // Add input of user to the todo list
    setTodos((oldTodos) => {
      return [...oldTodos, inputText];
    });
  }

  // Set the todos array without the element of given index
  function deleteTodo(id) {
    setTodos((oldTodos) => {
      // return array
      return oldTodos.filter((item, index) => {
        return index !== id; // return all elements that do not match id
      });
    });
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'></div>
          <div className='heading'>
            <h1>To-Do List</h1>
          </div>

          <Input onAddClick={addItem} />

          <div>
            <ul>
              {todos.map((todoItem, index) => (
                <Todo
                  key={index}
                  id={index}
                  onChecked={deleteTodo} // pass method that will delete the item
                  todo={todoItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
