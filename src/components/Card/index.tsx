import React from "react";
import FaceImage from "../../assets/face.jpg";
import BackImage from "../../assets/back.jpg";
import { CardContainer, CardContent, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={BackImage} alt="Imagem de perfil"/>
        <CardContent>
            <UserInfo>
                <UserPicture src={FaceImage} alt="Imagem de perfil"/>
                <div>
                    <h4>Nome do usuário</h4>
                    <p>@usuario</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Titulo do post</h4>
                <p>Descrição do post</p>
            </PostInfo>
            <HasInfo>
                <h4>12</h4>
                <p>Hashtags</p>
            </HasInfo>
        </CardContent>
    </CardContainer>
  )
}

export default Card;