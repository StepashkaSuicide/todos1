import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleStatus} from "../reducers/todoSlice";
import s from './TodoItem.module.css'

const TodoItem = ({ title, id, completed}) => {
    const dispatch = useDispatch()
    return (
            <li>
                <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
                />
                <span>{title}</span>
                <span  className={s.tor} onClick={() => dispatch(deleteTodo(id))}>&times;</span>
            </li>
    );
};

export default TodoItem;