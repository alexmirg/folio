import styled from 'styled-components'

const quoteSymbolHeight = '21px'

export const TestimonialBlock = styled.div`
    position: relative;
    padding: 100px 0 40px;
    background: #62473a url(${({bg}) => (bg ? bg : '')}) no-repeat center center;

    background-size: cover;
    font-family: 'Bebas Neue', sans-serif;
`
export const TestimonialContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.6rem;

    @media screen and (min-width: 576px) {
        font-size: 3rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 3.6rem;
    }
`
export const Quote = styled.p`
    position: relative;
    padding: 0 40px;
    margin-bottom: calc(30px + ${quoteSymbolHeight});
    line-height: 1;
    font-size: 1em;
    text-align: center;
    
    &:before,
    &:after {
        content: '';
        display: block;
        background: url(${({icon}) => (icon ? icon : '')}) no-repeat center center;
        width: 26px;
        height: ${quoteSymbolHeight};
        position: absolute;
    }
    &:before {
        top: -${quoteSymbolHeight};
        left: 0;
    }

    &:after {
        bottom: -${quoteSymbolHeight};
        right: 0;
        transform: scale(-1, 1);
    }
`
export const Author = styled.p`
    position: relative;
    margin-right: 1em;
    align-self: flex-end;
    font-size: .6em;

    &:before,
    &:after {
        content: '-';
    }

`