import styled from 'styled-components';

const ArticleItem = styled.div`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-right: 1rem;

    @media screen and (max-width: 790px) {
        font-size: 0.8rem;
    }
`;

const Author = styled(ArticleItem)`
    width: 15rem;
`;

const Title = styled(ArticleItem)`
    width: 20rem;
`;

const Link = styled(ArticleItem)`
    width: 20rem;
`;

const PageNumber = styled(ArticleItem)`
    width: 3rem;
`;

export { Author, Title, Link, PageNumber };