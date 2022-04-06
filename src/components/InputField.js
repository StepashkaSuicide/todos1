import React from 'react';
import s from './TodoItem.module.css'

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label className={s.button}>
            <input value={text} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    );
};

export default InputField;