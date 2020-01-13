import React from 'react';
import styled from 'styled-components';

const Todo = ({ item, completeTodo }) => {

    const { id, task, completed } = item;

    const StyledTodo = styled.li`
        cursor: pointer;
        text-decoration: ${completed ? 'line-through' : 'none'}
    `;

    return (
        <StyledTodo onClick={() => completeTodo(id)}>{task}</StyledTodo>
    );
};

export default Todo;
