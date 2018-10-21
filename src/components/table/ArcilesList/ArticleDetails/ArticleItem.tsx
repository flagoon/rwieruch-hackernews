import * as React from 'react';
// import styled from 'styled-components';
import DismissButton from '../../../DismissButton/DismissButton'
import Article from './Article';
import { Author, Link, PageNumber, Title } from './ArticleDetails'

import { IArticleData } from '../../../../data/articles'

interface IProps {
    article: IArticleData;
    onClick: (id: number) => React.MouseEvent<HTMLInputElement>;
}

const ArticleItem: React.SFC<IProps> = ({ article, onClick }) => {
    return (
        <Article url={article.link}>
            <Author>{article.author}</Author>
            <Title>{article.title}</Title>
            <Link>{article.link}</Link>
            <PageNumber>{article.pageNumber}</PageNumber>
            <DismissButton onClick={onClick} id={article.id} />
        </Article>
    )
}

export default ArticleItem;