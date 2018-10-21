export interface IArticleData {
    id: number;
    author: string;
    title: string;
    link: string;
    pageNumber: number;
}

export const articles: IArticleData[] = [
    {
        author: 'Pawel Kochanek',
        id: 1,
        link: "https://www.google.pl",
        pageNumber: 200,
        title: 'O obrotach ciał niebieskich'
    }, {
        author: 'Zenek Wiaderko',
        id: 2,
        link: 'https://www.wp.pl',
        pageNumber: 200,
        title: 'Uprawa ogródka'
    }, {
        author: 'Katarzyna Kochanek Śruba',
        id: 3,
        link: 'https://otodom.pl',
        pageNumber: 100,
        title: 'Domki, które lubię'
    },
    {
        author: 'Bożena Ogródek',
        id: 4,
        link: 'https://otodom.pl',
        pageNumber: 100,
        title: 'Hello World'
    }
]