import styled from 'styled-components';

const SecondButton = `

    border-color: var(--color-bg); 
    color:var(--color-bg); 
    background-color:var(--color-home);
    
        &:hover{
            background-color: var(--color-bg);
            color:var(--color-typography);
        }
`;

export const Button = styled.button`
	padding: 12px 24px;
    margin: 12px;
	border: 3px solid var(--color-home);
    border-radius: 50px;
    background-color: var(--color-bg);
    color: var(--color-home);
   

        &:hover{
            background-color: var(--color-home);
            color: var(--color-bg);
        }

 


     ${props => props.secondary ? SecondButton :''};

  
`;


