import React, { useState } from 'react';

function Input(props) {
  // State for the todo from user input
  const [inputText, setInputText] = useState('');
  // When the user input changes
  function onInputChange(event) {
    // Update the input text
    setInputText(event.target.value);
  }

  return (
    <div className='form'>
      <input
        className='text-dark'
        type='text'
        onChange={onInputChange}
        value={inputText}
      />
      <button
        onClick={() => {
          setInputText('');
          props.onAddClick(inputText);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
