import React from 'react';
import styled from 'styled-components';

const Todo = props => {

    const { item, completeTodo } = props;

    const StyledTodo = styled.li`
        cursor: pointer;
        text-decoration: ${item.completed ? 'line-through' : 'none'}
    `;

    return (
        <StyledTodo onClick={() => completeTodo(item.id)}>{item.task}</StyledTodo>
    );
};

export default Todo;
