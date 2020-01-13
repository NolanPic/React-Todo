import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const { todoItems } = props;

    return (
        <ul>
            {todoItems.map(item => (
                <Todo key={item.id} item={item} />
            ))}
        </ul>
    );

};

export default TodoList;
