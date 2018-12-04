import styled from "styled-components"

export const VerticalList = styled.ul`
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;

    margin: 0;
    padding: 0;
    list-style-type: none;

    &:li {
        display: flex;
        flex: 1;
        margin: 5px;
        padding: 5px;
    }
`;

export const HorizontalList = styled.ul`
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
    list-style-type: none;
`;