import * as React from 'react';
import ArticlesList from './ArcilesList/ArticlesList'
import Search from './Search/Search'

import { IArticleData } from '../../data/articles';

interface ITableProps {
    articlesList: IArticleData[];
};

interface ITableState {
    searchValue: string;
    articles: IArticleData[];
}

class Table extends React.Component<ITableProps, ITableState> {
    constructor(props: ITableProps) {
        super(props);
        const { articlesList } = this.props;

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            articles: articlesList,
            searchValue: '',
        }
    }

    public onChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ searchValue: (e.target as HTMLInputElement).value });

    }

    public onClick(id: number): any {
        const filteredArticles: IArticleData[] = this.state.articles.filter(article => article.id !== id);
        // tslint:disable-next-line
        this.setState({ articles: filteredArticles })
    };

    public render() {
        return (
            <React.Fragment>
                <Search onChange={this.onChange} value={this.state.searchValue} />
                <ArticlesList articles={this.state.articles} onClick={this.onClick} searchValue={this.state.searchValue} />
            </React.Fragment>
        )
    }
}

export default Table;
