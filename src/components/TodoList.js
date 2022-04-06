import React from 'react';
import s from "../App.module.css";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.oneSlice.todos)
    return (
        <ul className={s.borderTodo}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;