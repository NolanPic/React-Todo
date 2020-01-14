import styled from 'styled-components';

// neumorphic styles -- https://codepen.io/MoustafaJazzar/pen/MWWBPQj

const textColor = `rgba(201, 215, 230, 0.5)`;
const mainFont = `'Noto Sans KR', sans-serif`;

const neumorphicItem = `
    position: relative;
    border-radius: 18px;
    padding: 4px;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #FFFFFF;
    -webkit-tap-highlight-color: transparent;
`;

const neumorphicInner= `
    font-size: 2.2rem;
    transition: all .2s ease-in-out;
    border-radius: 16px;
    text-shadow: 2px 2px 2px #d6e1ef99, 0 0 0 #000, 2px 2px 2px #d6e1ef00;
`;

const neumorphicText = `
    width: 100%;
    height: 100%;
    border-radius: 16px;
    transition: all .2s ease-in-out;
    padding: 1rem;
`;

// depressed neumorphic
const neumorphicInnerDepressed = `
    box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
`;

const neumorphicTextDepressed = `
    text-shadow: 1px 1px 1px #d6e1ef99, 0 0 0 #000, 1px 1px 1px #d6e1ef00;
    text-decoration: line-through;
`;

// styled component exports

export const Main = styled.div`
    max-width: 400px;
    width: 80%;
    margin: 0 auto;
    height: 100vh;
`;

export const StyledTodoForm = styled.form`
    .input-wrap {
        ${neumorphicItem}
        margin-top: 3rem;
        margin-bottom: 1.4rem;
    }
    input[type=text] {
        font-family: ${mainFont};
        width: 100%;
        ${neumorphicInner}
        padding: 0,3rem;
        background-color: rgba(0,0,0,0);
        border: 0;
        text-indent: 1rem;
        color: ${textColor};
        caret-color: #999;

        &:focus {
            ${neumorphicInnerDepressed}
            outline: none;
        }
    }
    .actions {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.4rem;
    }

    .button-wrap {
        ${neumorphicItem}
    }

    button {
        font-family: ${mainFont};
        cursor: pointer;
        ${neumorphicInner}
        border: 0;
        background-color: rgba(0,0,0,0);
        color: ${textColor};

        &:active {
            ${neumorphicInnerDepressed}
        }

        &:focus {
            outline: none;
        }
    }
`;

export const StyledTodo = styled.li`
    cursor: pointer;
    margin-bottom: 1.6rem;
    ${neumorphicItem}

    .inner-wrapper {
        ${neumorphicInner}

        display: grid;
        place-items: center;
        text-align: center;

        span {
            font-family: ${mainFont};
            ${neumorphicText}
            color: ${textColor};
        }
    }

    &.completed {
        .inner-wrapper {
            ${neumorphicInnerDepressed}
    
            span {
                ${neumorphicTextDepressed}
            }
    
        }
    }
`;