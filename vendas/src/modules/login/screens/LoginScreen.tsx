

import { Button } from "antd"
import React, { useState } from "react";
import axios from "axios"

import Input from "../../../shared/inputs/InputData"
import { BackgroundImage, ContainerLogin, ContainerLoginAll, LimetedContainer, LogoImg, TitleLogin } from "../styles/loginScreen.styles"
import { ButtonAntd } from "../../../shared/button/Button.styles"
import Footer from "../../../shared/footer/Footer";



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleLogin = () => {
        alert(`username:  password: ${password}`);
        const handleLogin: any = async () => {
            await axios({
                method: 'post',
                url: 'http://localhost:8080/auth',
                data: {
                    email: email,
                    password: password,
                },
            })
                .then((result) => {
                    alert(`Fez login ${result.data.accessToken}`);
                    return result.data;
                })
                .catch(() => {
                    alert('Usuário ou senha inválido');
                });
        };

    }


    return (
        <div>
            <ContainerLoginAll>
                <BackgroundImage src='./logo.png' alt='foto' />
                <ContainerLogin>
                    <LimetedContainer>
                        <LogoImg src='./ufla.png' alt="logo" />
                        <TitleLogin level={2} type="success">Tela de Login</TitleLogin>
                        <Input title="Usuário :" margin="32px 0px 0px" />
                        <Input title='Senha :' margin="32px 0px 0px" />
                        <ButtonAntd type="primary"  >ENTRAR</ButtonAntd>
                    </LimetedContainer>
                </ContainerLogin >
            </ContainerLoginAll>

            <Footer />

        </div>
    )
}

export default LoginScreen
function setEmail() {
    throw new Error("Function not implemented.");
}

const a = 6 + 4 + 4 + 4 + 4 + 4 + 2
const b = 4 * 8 + 2 + 2

console.log("cursando", a)
console.log("cursado", b)