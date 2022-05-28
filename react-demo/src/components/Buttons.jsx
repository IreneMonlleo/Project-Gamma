import styled from 'styled-components';


 export const Button = styled.button`
	padding: 8px 16px;
	border: 3px solid var(--color-orange);
    border-radius: 50px;
    cursor: pointer;

     ${props => props.primary ? `border-color: var(--color-bg);` : `border-color: var(--color-orange);`}

  
`;


