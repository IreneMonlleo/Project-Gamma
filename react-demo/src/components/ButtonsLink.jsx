import { Link } from 'react-router-dom';
import styled from 'styled-components';



const SecondButton = `
    width: 250px;
    border-color: var(--color-bg); 
    color:var(--color-bg); 
       
        &:hover{
            color:var(--color-typography);
        }

        &::before{
            background-color: var(--color-bg);
        }
        &::after{
            border-color:var(--color-bg);
        }
        
`;

export const ButtonsLink = styled(Link)`
	display: inline-block;
	padding: 18px 24px;
	border-radius: var(--stroke-radius);
	color:var(--color-home);
    font-weight: bold;
	font-size: var(--size-mb-button);
	letter-spacing: .15rem;
	transition: all .3s;
	position: relative;
	overflow: hidden;
    text-decoration:none;
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




     ${props => props.secondary ? SecondButton :''};
     

  
`;


