import styled from 'styled-components'

export const PageHeader = styled.header`
    position: relative;
    height: 50vh;
    min-height: 280px;
    background: #252222  url(${({bgImage}) => (bgImage ? bgImage : '')}) no-repeat center center;
    background-size: cover;
`

export const HeaderContent = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
`

export const Heading = styled.h1`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 6rem;
    text-transform: uppercase;
    line-height: .8;
    font-weight: 400;
}
    @media screen and (min-width: 768px) {
        font-size: 9rem;
    }
`

export const HeadingSmall = styled.span`
    display: block;
    font-size: 2rem;

    @media screen and (min-width: 768px) {
        font-size: 3.6rem;
    }
`