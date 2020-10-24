import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const GalleryList = styled.div`
    display: grid;
    grid-template-columns: (2, 1fr);
    grid-template-areas: 
    "img1 img1"
    "img2 img2"
    "img3 img3"
    "img4 img4"
    "img5 img5"
    "img6 img6"
    "img7 img7"
    "img8 img8";

    @media screen and (min-width: 576px) {
        grid-template-areas: 
        "img1 img1"
        "img2 img2"
        "img3 img3"
        "img4 img4"
        "img5 img6"
        "img7 img8";
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 
        "img1 img1 img2 img2"
        "img3 img3 img4 img4"
        "img5 img6 img7 img8";
    }
`

export const GalleryItem = styled.div`
    position: relative;
    display: block;
    &:nth-of-type(1) { grid-area: img1; }
    &:nth-of-type(2) { grid-area: img2; }
    &:nth-of-type(3) { grid-area: img3; }
    &:nth-of-type(4) { grid-area: img4; }
    &:nth-of-type(5) { grid-area: img5; }
    &:nth-of-type(6) { grid-area: img6; }
    &:nth-of-type(7) { grid-area: img7; }
    &:nth-of-type(8) { grid-area: img8; }
`

export const ItemContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: rgba(101, 186, 153, .6);
    opacity: 0;

    &:hover { opacity: 1; }
`

export const ItemLink = styled(Link)`
    margin: 15px;
    z-index: 1;
`

export const ItemLinkIcon = styled.img``

export const Zoom = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: transparent;
    transition: all .2s;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30px;
        height: 30px;
        transform: translate(-50%, -50%);
        background: ${({icon}) => (icon ? `url(${icon})` : '#fff')} no-repeat center center;
    }
`

export const Image = styled.img`
    width: 100%;
`