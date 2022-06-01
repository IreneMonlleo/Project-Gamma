import styled from 'styled-components';

const SecondButton = `

    border-color: var(--color-bg); 
    color:var(--color-bg); 
    
        &:hover{
            color:var(--color-typography);
        }

        &::before{
            box-shadow: inset 0 0 0 20px var(--color-bg);
        }
        
        
`;

export const Button = styled.button`
	cursor: pointer;
	position: relative;
	display: inline-block;
	padding: 12px 24px;
    margin: 12px;
	border: var(--stroke) var(--color-home);
	border-radius: var(--stroke-radius);
    font-weight: bold;
	overflow: hidden;
    color:var(--color-home);
    background-color: transparent;

        &:hover{
            color:var(--color-bg);
        }

        &::before, &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            transition: all 0.25s ease;
            border-radius: 50px;
        }
            &::before{
                border-radius: var(--stroke-radius);
                margin-left: -100%;
                box-shadow: inset 0 0 0 20px var(--color-home);
                z-index:-1;
                
            }
            
            &:hover::before{
                margin-left: 0;
                
            }
    }

    


     ${props => props.secondary ? SecondButton :''};

  
`;


