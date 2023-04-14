import React from 'react'
import { FooterAll, FooterContainer, FooterIcons, Icons, Line, ListIcons, TitleFooter, TextCopy, List } from './Footer.style'
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'


const Footer = () => {
    return (
        <FooterAll>
            <FooterContainer>
                <div>
                    <TitleFooter>Links uteis</TitleFooter>
                    <FooterIcons>
                        <ListIcons>
                            <Icons>
                                <FacebookOutlined />
                            </Icons>
                            <Icons>
                                <InstagramOutlined />
                            </Icons>
                        </ListIcons>
                    </FooterIcons>
                </div>

                <div>
                    <FooterIcons>
                        <TitleFooter>Sobre</TitleFooter>
                        <List>
                            <p>Lorem ipsum dolor sit amet </p>
                            <p>Lorem ipsum dolor sit amet </p>
                            <p>Lorem ipsum dolor sit amet </p>
                            <p>Lorem ipsum dolor sit amet </p>
                        </List>
                    </FooterIcons>
                </div>
                <div>
                    <TitleFooter>Sobre</TitleFooter>
                     <List>
                        <p>Lorem ipsum dolor sit amet </p>
                        <p>Lorem ipsum dolor sit amet </p>
                        <p>Lorem ipsum dolor sit amet </p>
                        <p>Lorem ipsum dolor sit amet </p>
                    </List>

                </div>

            </FooterContainer>
            <Line />
            <TextCopy><span>WebStation</span>&copy; 2023</TextCopy>
        </FooterAll>
    )
}

export default Footer
