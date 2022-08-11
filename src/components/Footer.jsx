import React, { Component }  from 'react';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display:flex;`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;`
const Center = styled.div`
    flex:1;
    padding:20px;`
const Right = styled.div`
    flex:1;
    padding:20px;`

const Logo = styled.h1``

const Desc = styled.p`
    margin:20px 0px;`

const SocialContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right:20px;`

const Title = styled.h3`
    margin-bottom: 30px;
`
  
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
  
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

  
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ShoeFactory</Logo>
            <Desc>A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
                <SocialIcon>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Help</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622, Kirti Nagar, 110043
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 987654321
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@shoefactory.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

        </Right>
    </Container>
  )
}

export default Footer