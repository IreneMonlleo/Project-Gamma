import styled from "styled-components"




export default  function Skills(props) {
    
    
    return <SkillsContainer>
            <h3 className="skills__title">{props.title}</h3>
            <p className="skills__description">{props.text}</p>
        </SkillsContainer>
        
   
}

export const SkillsContainer = styled.div`
    margin:24px;
    padding:48px;
    background-color: var(--color-front);

    .skills__title{
        text-align:center;
        font-size:24px;
        font-weight:bold;

    }
    .skills__description{
        font-size: 14px;
        text-align:left;
    }

    
`


