import styled from "styled-components";

import searchBackground from "../../../../assets/img/search-background.jpg"

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
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

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 3;

    background-color: #191A1C;
    
    span {
        color: #eee !important;

        &:hover {
            color: #ccc !important;
        }
    }
`;