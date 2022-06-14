import styled from "styled-components"




export default  function Skills(props) {
    
    
    return <SkillsContainer>
            <h3 className="skills__title left ">{props.title}</h3>
            <p className="skills__description">{props.text}</p>
        </SkillsContainer>
        
   
}

export const SkillsContainer = styled.div`
    margin:12px;
    padding:48px;
    display: inline-block;
    background-color: var(--color-front);

    .skills__title{
        font-size:24px;
        font-weight:bold;
        margin-bottom:24px;

    }
    .skills__description{
        font-size: 14px;
        text-align:left;
        width:200px;
    }
    @media all and (min-width: 650px){
        background-color: transparent;
        &:hover{
            background-color: var(--color-front);
        }
    }
    
`


