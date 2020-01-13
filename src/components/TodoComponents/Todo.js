import React from 'react';

const Todo = props => {

    const { item, completeTodo } = props;

    return (
        <li onClick={() => completeTodo(item.id)}>{item.task}</li>
    );
};

export default Todo;
