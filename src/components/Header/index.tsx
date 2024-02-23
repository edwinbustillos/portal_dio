import React from "react";
import { BuscarInputContainer, HeaderContainer, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";
import logo from "../../assets/logo-full.svg";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    autenticado?: boolean;
}

export default function Header({autenticado}:HeaderProps ) {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login');
    }
    const handleClickSignUp = () => {
        navigate('/signup');
    }

    return (
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <img src={logo} alt="Logo" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu href="#">Live Code</Menu>
                            <Menu href="#">Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/2254731?v=4" />
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button onClick={handleClickSignIn} title="Entrar" />
                            <Button onClick={handleClickSignUp} title="Cadastrar" />
                        </>
                    )}
                </Row>
            </HeaderContainer>

        </Wrapper>
    );
    }