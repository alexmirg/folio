import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageFooter = styled.footer`
    position: relative;
    padding: 56px 0 30px;
    background: #676767  url(${({bgImage}) => (bgImage ? bgImage : '')}) no-repeat center center;
    background-size: cover;
`

export const FooterContent = styled.div`
    position: relative;
`

export const HeadingSmall = styled.span`
    display: block;
    font-size: 2rem;

    @media screen and (min-width: 768px) {
        font-size: 3.6rem;
    }
`

export const FooterContact = styled.div`
    margin-bottom: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.2rem;

    @media screen and (min-width: 576px) {
        padding: .4em 1.5em .25em;
        border-width: 4px;
        font-size: 4rem;
    }

    @media screen and (min-width: 768px) {
        border-width: 5px;
        font-size: 6rem;
    }
`

export const ContactNumber = styled(Link)`
    font-size: .8em;
    transition: all .2s;

    &:hover {
        text-decoration: none;
        color: #e74c3c;
    }
`

export const ContactEmail = styled(Link)`
    display: block;
    padding: .4em .5em .25em;
    margin: 24px 0;
    border: 2px solid #fff;
    font-size: 1em;
    text-decoration: none;
    transition: all .2s;

    &:hover {
        text-decoration: none;
        color: #e74c3c;
        border-color: #e74c3c;
    }
`

export const Address = styled.p`
    font-size: .5em;
`

export const Copyright = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;

    @media screen and (min-width: 768px) {
        font-size: 1.4rem;
    }
`

export const Paragraph = styled.p``