import styled from "styled-components"

export default function Title(props) {
  

    return(
        <ContainerTitleCard >
            <StainCard src={ props.img } alt="Mancha corporativa"></StainCard>
            <TitleCard className='card__title'>
                <span className='title-section'> { props.title }</span>
                <span className='subtitle-section'>{ props.secondtitle }</span>
            </TitleCard>
        </ContainerTitleCard >
        ) 
}

export const ContainerTitleCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

    export const StainCard = styled.img`
        height: 80px; 
        width: 74px;

    `
    export const TitleCard = styled.img`
        height: 80px; 
        width: 74px;

        .title-section {
            display: block;
        }

    `
    