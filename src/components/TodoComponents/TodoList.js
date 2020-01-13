import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoItems, completeTodo }) => {

    return (
        <ul>
            {todoItems.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    completeTodo={completeTodo}
                />
            ))}
        </ul>
    );

};

export default TodoList;
