import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  position: relative;
  margin-bottom: 24px;

  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  } */
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
  background-repeat: no-repeat;
  background-size: auto 180px;
  background-position: center;
  
  /* object-fit: cover;
  border-radius: 10px; */
`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    div{
        margin-left: 12px;
    }
    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
    `;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border:3px solid #FFFFFF;
`;

export const PostInfo = styled.div`
    margin-top: 12px;
    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
`;

export const HasInfo = styled.div`
    margin-top: 12px;
    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
    p{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
    }
`;