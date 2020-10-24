import React from 'react'

import { Container } from '../../theme/GlobalStyles'
import {
    PageNews,
    Content,
    Column,
    MainPost,
    Meta,
    DateBlock,
    Date,
    TagsBlock,
    Tags,
    PostHeader,
    ItemTitle,
    PostImage,
    Image,
    PostDesc,
    Paragraph,
    More,
    TagsLabel,
    TagsList,
    Tag,
    RecomendTitle,
    TitleAccent,
    RecomendPost,
    RecomendImage,
    RecomendDesc,
    RecomendDate
} from './News.elements'

import tag from '../../images/icons/tag.png'
import arrow from '../../images/icons/arrow.png'

import Heading from '../Heading/Heading'

const data = {
    title: 'News'

}
const News = () => {
    return (
        <PageNews>
            <Container>
                <Heading data={data} />
                <Content>
                    <MainPost>
                        <Meta>
                            <DateBlock>
                                <Date>
                                    23 September 2019
                                </Date>
                            </DateBlock>
                            <TagsBlock tag={tag}>
                                <Tags>
                                    Glamour, Fashion
                                </Tags>
                            </TagsBlock>
                        </Meta>
                        <PostHeader>
                            <ItemTitle>
                                Duis dapibus aliquam mi, eget euismod sem scelerisque ut.
                            </ItemTitle>
                        </PostHeader>
                        <PostImage>
                            <Image src="" alt="" />
                        </PostImage>
                        <PostDesc>
                            <Paragraph>
                                Nunc nec massa et risus iaculis interdum et sed mi. Nam viverra ac neque eu aliquet. Maecenas posuere, neque non vestibulum
                                sodales, arcu diam interdum nulla, in molestie magna magna vitae justo. Aenean semper volutpat
                                sapien eu porta. Etiam vestibulum pharetra risus vel ultricies.
                            </Paragraph>
                            <More to="/" arrow={arrow}>Read more...</More>
                        </PostDesc>
                    </MainPost>
                    <Column>
                        <TagsLabel>Tags</TagsLabel>
                        <TagsList>
                            <Tag to="/">Glamour</Tag>
                            <Tag to="/">Street</Tag>
                            <Tag to="/">Personal</Tag>
                            <Tag to="/">Portrait</Tag>
                            <Tag to="/">B & W</Tag>
                            <Tag to="/">Nude</Tag>
                            <Tag to="/">Wedding</Tag>
                            <Tag to="/">Fashion</Tag>
                            <Tag to="/">Kids</Tag>
                        </TagsList>
                        <RecomendTitle>from the<TitleAccent>blog</TitleAccent></RecomendTitle>
                        <RecomendPost>
                            <RecomendImage>
                                <Image src="" />
                            </RecomendImage>
                            <RecomendDesc>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi blandit velit id dolor fermentum, non posuere libero posuere.
                                </Paragraph>
                                <RecomendDate>26 Aug, 2019</RecomendDate>
                            </RecomendDesc>
                        </RecomendPost>
                        <RecomendPost>
                            <RecomendImage>
                                <Image src="" />
                            </RecomendImage>
                            <RecomendDesc>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi blandit velit id dolor fermentum, non posuere libero posuere.
                                </Paragraph>
                                <RecomendDate>26 Aug, 2019</RecomendDate>
                            </RecomendDesc>
                        </RecomendPost>
                    </Column>
                </Content>
            </Container>
        </PageNews>
    )
}

export default News
