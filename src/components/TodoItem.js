import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleteTodo} from "../reducers/todoSlice";
import s from './TodoItem.module.css'

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
            <li>
                <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleCompleteTodo({id}))}
                />
                <span>{text}</span>
                <span  className={s.tor} onClick={() => dispatch(removeTodo({id}))}>&times;</span>
            </li>
    );
};

export default TodoItem;