import styled from "styled-components"
import searchBackground from "../../../../assets/img/search-background.jpg"

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    justify-content: center;
    align-items: center;

    background: url(${searchBackground});
    background-color: #191A1C;

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