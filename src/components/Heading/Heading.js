import React from 'react'
import {
    HeadingBlock,
    Title,
    Subtitle
} from './Heading.elements'

const Heading = (props) => {
    const title = props.data.title
    ? <Title>{props.data.title}</Title> 
    : '';

    const subtitle = props.data.subtitle
    ? <Subtitle>{props.data.subtitle}</Subtitle> 
    : '';
    
    
    return (
        <>
            <HeadingBlock>
                {title}
                {subtitle}
            </HeadingBlock>   
        </>
    )
}

export default Heading
