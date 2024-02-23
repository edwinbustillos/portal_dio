import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, TitleHighlight, Title, TextContent } from './styles';
import bannerImage from '../../assets/banner.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }
    let autenticado = false;
    return (<> 
        <Header autenticado ={autenticado} />
        <Container>
            <div>
                <Title>
                    <br />
                    <TitleHighlight>
                        Implemente 
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias mais desejadas do mercado e encare seu novo 
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={bannerImage} alt="Banner" />
            </div>
        </Container>
    </>);
}

export default Home;