import * as React from 'react'
import styled from 'styled-components';

interface ISearch {
    onChange: (e: React.FormEvent) => void;
    value: string;
}

const Search = ({ onChange, value }: ISearch) => {
    return <SearchInput type='text' value={value} onChange={onChange} />
}

const SearchInput = styled.input`
    margin: 1rem 1rem 0;
    font-size: 1rem;
    padding: 0.2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export default Search;
