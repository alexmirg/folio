import styled from 'styled-components'


export const PageBio = styled.div`
    padding: 50px 0 50px;
    background: #e74c3c;
`
export const BioContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
export const BioColumn = styled.div`

    @media screen and (min-width: 768px) {
        flex: 1 0 50%;
    }
`
export const ColumnAttrs = styled(BioColumn)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
export const ColumnDesc = styled(BioColumn)`
    margin-bottom: 1em;
    line-height: 1.4;
    font-size: 1.4rem;

`
export const BioName = styled.h3`
    font-size: 3.6rem;
    text-transform: uppercase;
    font-family: 'Bebas Neue', sans-serif;
`
export const BioImage = styled.div`
    margin: 30px 0 50px;
    border-radius: 50%;
    overflow: hidden;
`
export const Avatar = styled.img`

`
export const BioTitle = styled.h4`
    margin-bottom: 1em;
    font-size: 1.8rem;
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;

    @media screen and (min-width: 768px) {
        text-align: left;
    }
`
export const Paragraph = styled.p`
    margin-bottom: 1em;
    line-height: 1.4;
    font-size: 1.4rem;
`