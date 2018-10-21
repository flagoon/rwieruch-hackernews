import * as React from 'react';
import styled from 'styled-components';

interface IDismissButton {
    onClick: (id: number) => React.MouseEvent<HTMLInputElement>;
    id: number;
}

const DismissButton = ({ onClick, id }: IDismissButton) => {
    // tslint:disable-next-line
    return <Button type="button" onClick={() => onClick(id)}>Dismiss</Button >
}

const Button = styled.button`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    margin: 0 1rem;
    padding: 3px;
    background: red;
    color: white;
    border: 1px solid black;
    cursor: pointer;

    :hover {
        background-color: lightblue;
        color: black;
    }
`;

export default DismissButton;
