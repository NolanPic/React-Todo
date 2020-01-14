import React from 'react';
import { StyledTodo } from '../styled';

const Todo = ({ item, completeTodo }) => {

    const { id, task, completed } = item;

    return (
        <StyledTodo onClick={() => completeTodo(id)} className={completed ? 'completed' : ''}>
            <div className="inner-wrapper">
                <span>{task}</span>
            </div>
        </StyledTodo>
    );
};

export default Todo;
