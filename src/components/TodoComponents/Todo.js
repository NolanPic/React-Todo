import React from 'react';
import styled from 'styled-components';

const Todo = ({ item, completeTodo }) => {

    const { id, task, completed } = item;

    const StyledTodo = styled.li`
        cursor: pointer;
        position: relative;
        border-radius: 18px;
        padding: 2px;
        box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #FFFFFF;
        -webkit-tap-highlight-color: transparent;

        .inner-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 16px;
            transition: all .2s ease-in-out;
            display: grid;
            place-items: center;

            span {
                font-size: 2.2rem;
            }
        }

        &.completed {
            .inner-wrapper {
                box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
        
                span {
                    text-shadow: 1px 1px 1px #d6e1ef99, 0 0 0 #000, 1px 1px 1px #d6e1ef00;
                    text-decoration: line-through;
                }
        
            }
        }
    `;

    return (
        <StyledTodo onClick={() => completeTodo(id)} className={completed ? 'completed' : ''}>
            <div className="inner-wrapper">
                <span>{task}</span>
            </div>
        </StyledTodo>
    );
};

export default Todo;
