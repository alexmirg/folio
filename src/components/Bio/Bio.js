import React from 'react'
import { Container } from '../../theme/GlobalStyles'
import { 
    PageBio,
    BioContent,
    ColumnAttrs,
    ColumnDesc,
    BioName,
    BioImage,
    Avatar,
    BioTitle,
    Paragraph
} from './Bio.elements'

import Heading from '../Heading/Heading'
import Socials from '../Socials/Socials'


import avatar from '../../images/avatar.jpg'
const data = {
    title: 'Bio',
    subtitle: ''
}

const Bio = () => {
    return (
        <PageBio>
            <Container>
                <Heading data={data} />
                <BioContent>
                    <ColumnAttrs>
                        <BioName>John Smith</BioName>
                        <BioImage><Avatar src={avatar} /></BioImage>
                        <Socials />
                    </ColumnAttrs>
                    <ColumnDesc>
                        <BioTitle>
                            Best Solution is the simplest IDEA!
                        </BioTitle>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam non neque iaculis sollicitudin. Nunc nec massa et
                            risus iaculis interdum et sed mi. Nam viverra ac neque eu aliquet. Maecenas posuere, neque non
                            vestibulum sodales, arcu diam interdum nulla, in molestie magna magna vitae justo. Aenean semper
                            volutpat sapien eu porta. Etiam vestibulum pharetra risus vel ultricies. Phasellus tempus, enim
                            sed gravida interdum, lorem ipsum auctor libero, ut ultrices dolor dolor at nulla. Integer viverra
                            vitae velit eget tincidunt. Fusce tristique eros ac est mattis consequat.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam non neque iaculis sollicitudin. Nunc nec massa et
                            risus iaculis interdum et sed mi. Nam viverra ac neque eu aliquet. Maecenas posuere, neque non
                            vestibulum sodales, arcu diam interdum nulla, in molestie magna magna vitae justo.
                        </Paragraph>
                    </ColumnDesc>
                </BioContent>
            </Container>
        </PageBio>
    )
}

export default Bio
