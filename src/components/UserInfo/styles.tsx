import styled from "styled-components";

interface UserInfoContainerProps {
    percentual: any;
}

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 1px solid #fff;
    background-color: #151515;
`;

export const NameText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
`;

export const Progress = styled.div<UserInfoContainerProps>`
    width: 180px;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        background-color: #23DD7A;
        border-radius: 3px;
    }
`; 