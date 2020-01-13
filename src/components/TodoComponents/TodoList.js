import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StyledTodoList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TodoList = ({ todoItems, completeTodo }) => {

    return (
        <StyledTodoList>
            {todoItems.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    completeTodo={completeTodo}
                />
            ))}
        </StyledTodoList>
    );

};

export default TodoList;
