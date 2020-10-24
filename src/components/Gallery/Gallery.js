import React from 'react'
import {
    GalleryList,
    GalleryItem,
    Image,
    ItemContent,
    ItemLink,
    ItemLinkIcon,
    Zoom
} from './Gallery.elements'

import image01 from '../../images/gallery/image1.jpg'
import image06 from '../../images/gallery/image6.jpg'
import image07 from '../../images/gallery/image7.jpg'
import image08 from '../../images/gallery/image8.jpg'
import image09 from '../../images/gallery/image9.jpg'
import image10 from '../../images/gallery/image10.jpg'

import zoom from '../../images/icons/zoom.png'
import link from '../../images/icons/link.png'
import info from '../../images/icons/info.png'
import like from '../../images/icons/like.png'
import polaroid from '../../images/icons/polaroid.png'

const Gallery = () => {
    return (
        <GalleryList>
            <GalleryItem>
                <Image src={image01} alt='Image 1' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image06} alt='Image 2' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image01} alt='Image 3' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image06} alt='Image 4' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image09} alt='Image 5' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image07} alt='Image 6' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image08} alt='Image 7' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
            <GalleryItem>
                <Image src={image10} alt='Image 8' />
                <ItemContent>
                    <Zoom to="/" icon={zoom} />
                    <ItemLink to="/"><ItemLinkIcon src={polaroid} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={link} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={info} /></ItemLink>
                    <ItemLink to="/"><ItemLinkIcon src={like} /></ItemLink>
                </ItemContent>
            </GalleryItem>
        </GalleryList>
    )
}

export default Gallery
