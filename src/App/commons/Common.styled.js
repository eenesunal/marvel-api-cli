import styled from "styled-components"

export const Link = styled.span`
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-decoration: none !important;

    color: #0000FF !important;
    cursor: pointer;

    &:hover {
        color: #772233 !important;
    }

    &:active {
        color: #FF0000 !important;
    }

    &:visited {
        color: #0B0080 !important;
    }
`;