import React, { useState } from 'react';

function Todo(props) {
  const [crossed, setCrossed] = useState(false);

  // set crossed / not crossed
  function onClickTodo() {
    setCrossed((oldValue) => {
      return !oldValue;
    });
  }

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      style={{ textDecoration: crossed ? 'line-through' : 'none' }}
      className='mx-5'
    >
      {props.todo}
    </li>
  );
}

export default Todo;
