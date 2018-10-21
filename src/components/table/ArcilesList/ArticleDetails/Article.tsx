import * as React from 'react'
import styled from 'styled-components';

interface IArticle {
    url: string,
    children?: React.ReactNode
}

const Article = ({ url, children }: IArticle) => {
    return <StyledArticle data-url={url}>{children}</StyledArticle>
}

const StyledArticle = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 1rem;
    align-items: center;

    :hover {
        background-color: #ccc;
        border-color: #aaa;
        cursor: pointer;
    }
`;

export default Article;