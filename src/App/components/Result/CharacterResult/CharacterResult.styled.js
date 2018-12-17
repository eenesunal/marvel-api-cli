import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-self: stretch;

    margin: 0;
    padding: 0;
`;

export const Results = styled.div`
    display: flex;
    flex: 11;
    flex-direction: column;
    align-self: stretch;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    background-color: #191A1C;

    width: 100%;
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
    background-color: #f4f8fa;

    &:nth-of-type(2n) {
        margin-right: 0;
    }
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    position: relative;

    &:hover img {
      opacity: 0.3;
    }

    &:hover > div {
        opacity: 1;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    height: 100%;

    padding: 5px;
`;

export const Thumbnail = styled.img`
    display: block;
    position: relative;

    width: 100%;
    height: auto;
    opacity: 1;

    transition: .5s ease;
    backface-visibility: hidden;

    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    
    cursor: pointer;
`;

export const ThumbnailOverlay = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

export const ThumbnailText = styled.div`
    background-color: #ef4747;
    color: white;
    font-size: 10px;
    padding: 16px 32px;
    cursor: pointer;
    border-radius: 5px;
`;

export const Name = styled.label`
    font-size: 17px;
    font-weight: 600;
    margin: 0 5px;

    cursor: pointer;

    &:hover {
        color: #aaa;
    }
`;

export const Description = styled.p`
    margin: 5px;
    font-size: 13px;
    font-weight: 200;
`;