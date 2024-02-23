import React from 'react';
//import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container, TitleHighlight, Title, Column } from './styles';
//import bannerImage from '../../assets/banner.png';
import UserInfo from '../../components/UserInfo';
import FaceImage from "../../assets/face.jpg";

const Feed = () => {
    return (<> 
        <Header autenticado={false} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>Ranking</TitleHighlight>
                <UserInfo percentual={50} name="João" image={FaceImage} />
                <UserInfo percentual={40} name="João" image={FaceImage} />
                <UserInfo percentual={70} name="João" image={FaceImage} />
                <UserInfo percentual={30} name="João" image={FaceImage} />
                <UserInfo percentual={10} name="João" image={FaceImage} />
            </Column>
        </Container>
    </>);
}

export default Feed;