import styled from 'styled-components'

export const HeadingBlock = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4.8rem;
    margin-bottom: 50px;
`

export const Title = styled.h2`
    position: relative;
    font-size: 1em;
    font-weight: 400;

    &:after {
        content: '/';
        margin-left: .2em;
    }
`

export const Subtitle = styled.h3`
    font-size: .5em;
    font-weight: 400;
`
