import styled from "styled-components";

interface ColumnProps {
    flex: any;
}

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    `;
export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;    
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
    `;

export const TitleHighlight = styled.span`
    color: #E4105D;
    padding: 0 5px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 64px;
    `;
export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
`;

export const Column = styled.div<ColumnProps>`
flex: ${({ flex }) => flex};
padding-right: 24px;
`;