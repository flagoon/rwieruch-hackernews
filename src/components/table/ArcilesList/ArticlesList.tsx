import * as React from 'react'
import ArticleItem from './ArticleDetails/ArticleItem';

import { IArticleData } from '../../../data/articles'

interface IProps {
    articles: IArticleData[];
    onClick: (id: number) => React.MouseEvent<HTMLInputElement>;
    searchValue: string;
}

const ArticlesList: React.SFC<IProps> = ({ articles, onClick, searchValue }) => {
    return (
        <div>
            {articles
                .filter(article => article.title.toLowerCase()
                    .includes(searchValue.toLowerCase()))
                .map(article => {
                    return (
                        <ArticleItem key={article.id} article={article} onClick={onClick} />
                    )
                })}
        </div>
    )
}

export default ArticlesList;