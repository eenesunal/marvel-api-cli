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
    box-shadow: 0 0 0 100px inset, 0 0 5px grey;
    transition: box-shadow 1s;

    &::after {
        width: 80%;
        height: 80%;
        display: block;
        font:  16pt 'bookman old syle' ;
        color: white;
        border: 2px solid;
        text-align: center;
        
        /* center content using flex box */
        display: flex;
        justify-content: center;
        align-items: center;
        
        /* hover out transition */
        transition: opacity 1s .5s;
    }
 
    /* reveal pokemon picture on hover */
    &:hover {
        transition: box-shadow 1s;
        box-shadow: 0 0 0 5px inset, 0 0 5px grey, 0 0 10px grey inset;
    }
    
    /* hide pokemon name on hover */
    &:hover::after {
        transition: opacity .5s;
        opacity: 0;
    }
`;

export const Title = styled.span`
    font-size: 72px;
    font-weight: 900;
    color: #F12F36;
    font-family: Marvel-Bold;
`;