import styled from 'styled-components';



export const ButtonA = styled.a`
display: inline-block;
padding: 18px 24px;
border-radius: var(--stroke-radius);
color:var(--color-home);
font-weight: bold;
font-size: var(--size-mb-button);
transition: all .3s;
position: relative;
overflow: hidden;
text-decoration:none;
margin-right:24px;
z-index: 1;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: var(--stroke) var(--color-home);
        border-radius: var(--stroke-radius);
        z-index: -2;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: var(--color-home);
        transition: all .3s;
        border-radius: var(--stroke-radius);
        z-index: -1;
    }
    &:hover {
        color: var(--color-bg);
        &:before {
            width: 100%;
        }
    }
    }
}`
