import styled from "styled-components";

import searchBackground from "../../../../assets/img/search-background.jpg"

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    justify-content: center;
    align-items: center;

    background: url(${searchBackground});
    background-color: #191A1C;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    input {
        width: 40%;
        max-width: 500px;
    }
`;

export const SearchButton = styled.button`
    padding: 10px;
    margin: 10px;

    border: 1px solid transparent;
    border-radius: 5px;
    outline: none;

    color: #eee;
    background: red;
    font-size: 24px;

    &:hover {
        background-color: #ef4747
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 3;

    overflow-y: auto;

    background-color: #191A1C;
    
    span {
        color: #eee !important;

        &:hover {
            color: #ccc !important;
        }
    }
`;