import React from "react";
import { UserInfoContainer, UserPicture, NameText, Progress } from "./styles";

interface UserInfoProps {
    name: string;
    image: string;
    percentual: number;
}

const UserInfo = ({name, image, percentual}:UserInfoProps) => {
    return(
        <UserInfoContainer>
            <UserPicture src={image} />
                <div>
                    <NameText>{name}</NameText>
                    <Progress percentual={percentual} />
                </div>
        </UserInfoContainer>

    )
};

export default UserInfo;
