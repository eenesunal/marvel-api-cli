import styled from "styled-components"

import heroes from "../../../assets/img/marvel-heroes.png"
import comics from "../../../assets/img/marvel-comics.jpg"

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-self: stretch;
    align-items: stretch;

    margin: 0;
    padding: 0;

    align-items: stretch;
`;

export const Characters = styled.div`
    display: flex;
    flex: 1;

    position: relative;

    margin: 0;
    padding: 0;

    background: url(${heroes});
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;
`;

export const Comics = styled.div`
    display: flex;
    flex: 1;

    position: relative;

    margin: 0;
    padding: 0;

    background: url(${comics});
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;
`;

export const Overlay = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, .6);
`;

export const Title = styled.span`
    font-size: 72px;
    font-weight: bold;
    color: #F12F36;
`;