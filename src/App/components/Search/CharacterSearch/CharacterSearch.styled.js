import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
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