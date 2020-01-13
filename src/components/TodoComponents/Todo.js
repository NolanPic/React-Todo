import React from 'react';

const Todo = props => {

    const { item } = props;

    return (
        <li>{item.text}</li>
    );
};

export default Todo;
