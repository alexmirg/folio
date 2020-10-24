import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageNews = styled.div`
    padding: 76px 0 26px;
    background: #cdcdcd;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
export const Column = styled.div`
    margin-bottom: 50px;

    @media screen and (min-width: 768px) {
        flex: 1 0 50%;
        &:last-of-type {
            padding-left: 70px;
        }
    }
`
export const MainPost = styled(Column)`
    flex: 1 0 50%;
`

export const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const DateBlock = styled.div`
    padding: .3em 1.2em;
    font-size: 1.1rem;
    background: #65ba99;
    color: #fff;
`
export const Date = styled.span``

export const TagsBlock = styled.div`
    position: relative;
    padding-left: 25px;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 600;
    color: #e74c3c;

    &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    width: 16px;
    height: 13px;
    background: ${({tag}) => (tag ? `url(${tag})` : '')} no-repeat center center;
}
`
export const Tags = styled.div`

`
export const PostHeader = styled.div`
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: 600;
    color: #65ba99;
`
export const ItemTitle = styled.div`

`
export const PostImage = styled.div`
    min-height: 200px;
    margin-bottom: 10px;
    border-radius: 3px;
    background: #676767;
`
export const Image = styled.img`

`
export const PostDesc = styled.div`
    line-height: 1.4;
    font-size: 1.4rem;
    color: #676767;
`
export const Paragraph = styled.p`

`
export const More = styled(Link)`
    position: relative;
    margin-right: 10px;
    float: right;
    color: #e74c3c;
    
    &:after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 13px;
    margin-left: 12px;
    margin-bottom: -2px;
    background: ${({arrow}) => (arrow ? `url(${arrow})` : '')} no-repeat center center;
}
`
export const TagsLabel = styled.div`
    margin-bottom: 20px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    color: #65ba99;
`
export const TagsList = styled.div`
        margin-bottom: 50px;
`
export const Tag = styled(Link)`
    display: inline-block;
    padding: .3em .8em;
    margin: 0 6px 10px 0;
    font-size: 1.4rem;
    background: #65ba99;

    &:hover,
    &:focus {
    background: #e74c3c;    
    text-decoration: none;
}
`
export const RecomendTitle = styled.div`
    margin-bottom: 1em;
    font-size: 2rem;
    font-style: italic;
    color: #676767;
`
export const TitleAccent = styled.strong`
        text-transform: uppercase;
        font-style: normal;
        color: #252222;
        margin-left: 6px;
`
export const RecomendPost = styled.div`
    display: flex;
    margin-bottom: 20px;
`
export const RecomendImage = styled.div`
    display: block;
    width: 70px;
    height: 70px;
    flex: 1 0 70px;
    margin-right: 20px;
    background: #676767;
    border-radius: 3px;
`
export const RecomendDesc = styled.div`
    line-height: 1.4;    
    font-size: 13px;
    color: #252222;
`
export const RecomendDate = styled.div`
    color: #e74c3c;
`