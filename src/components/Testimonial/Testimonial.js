import React from 'react'
import { Container } from '../../theme/GlobalStyles'
import {
    TestimonialBlock,
    TestimonialContent,
    Quote,
    Author
} from './Testimonial.elements'


import bg from '../../images/testimonial_bg.jpg'
import quoteIcon from '../../images/icons/quote_symbol.png'

import Overlay from '../Overlay/Overlay'

const Testimonial = () => {
    return (
        <TestimonialBlock bg={bg}>
            <Container>
                <Overlay />
                <TestimonialContent>
                    <Quote icon={quoteIcon}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam non neque iaculis sollicitudin.</Quote>
                    <Author>lorem ipsum </Author>
                </TestimonialContent>
            </Container>
        </TestimonialBlock>
    )
}

export default Testimonial
