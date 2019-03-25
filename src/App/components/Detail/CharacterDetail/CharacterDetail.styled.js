import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    background-color: #191A1C;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    width: 200px;
    height: 200px;

    border-radius: 50%;
    border: 1px solid black;
    overflow: hidden;

    margin: 10px auto;
    padding: 0;
`;

export const Image = styled.img`
    margin: 0;
    padding: 0;

    width: 100%;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
`;

export const Name = styled.span`
    font-size: 34px;
    font-weight: 900;
    color: #eee;

    margin: 0 auto;
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #eee;

    padding: 0 5px;
`;

export const ComicsList = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    overflow-x: auto;
`;

export const Comic = styled.div`
    display: flex;
    width: 250px;
`;

export const ComicName = styled.span`
    font-size: 14px;
    color: #eee;
    font-weight: 400;
`;