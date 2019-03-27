import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-self: stretch;

    background-color: #191A1C;

    padding: 0 10px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-shrink: 0;

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
    flex-shrink: 0;

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

export const ListWrapper = styled.div`
    display: flex;
    flex: 1;
`;

export const VerticalList = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;

    padding: 0 5px;
`;

export const ListItem = styled.div`
    display: flex;
`;

export const ListItemHeader = styled.span`
    font-size: 16px;
    color: #fff;
    font-weight: 900;
    text-decoration: underline;
    
    align-self: center;
`;

export const ListItemText = styled.span`
    font-size: 14px;
    color: #eee;
    font-weight: 400;
    line-height: 21px;
`;