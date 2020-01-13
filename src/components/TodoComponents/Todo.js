import React from 'react';

const Todo = props => {

    const { item } = props;

    return (
        <li>{item.task}</li>
    );
};

export default Todo;
