import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-self: stretch;
    flex-wrap: wrap;
    justify-content: center;

    margin: 0;
    padding: 10px;
`;

export const Box = styled.div`
    display: flex;

    width: calc(50% - 20px);
    height: 200px;
    box-sizing: border-box;

    margin: 0 10px 10px 0;
    padding: 0;

    border: 1px solid #cdcdcd;
    border-radius: 5px;

    &:nth-of-type(2n) {
        margin-right: 0;
    }
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
`;

export const Right = styled.div`
    display: flex;
    flex: 2;
    height: 100%;

    padding: 5px;
`;

export const Thumbnail = styled.img`
    position: relative;

    width: 100%;

    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`;

export const Name = styled.label`
    font-size: 17px;
    font-weight: 600;
    margin: 0 5px;
`;

export const Description = styled.p`
    font-size: 15px;
    font-weight: 400;
`;