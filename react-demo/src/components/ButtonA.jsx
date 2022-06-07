import styled from 'styled-components';







export const ButtonA = styled.a`
	cursor: pointer;
	position: relative;
	display: inline-block;
	padding: 12px 24px;
	border: var(--stroke) var(--color-home);
	border-radius: var(--stroke-radius);
    font-weight: bold;
	overflow: hidden;
    color:var(--color-home);
    background-color: transparent;
    text-decoration:none;
    
   

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
                box-shadow: inset 0 0 0 40px var(--color-home);
                z-index:var(--bottom-medium);
                
            }
            
            &:hover::before{
                margin-left: 0;
                
            }
    }`
