import React from 'react'
import styled from 'styled-components'
import { Send } from "@material-ui/icons";


const Container = styled.div`
    height:60vh;
    background-color:#f7f0f3;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
    border:1px solid lightgray;
    height:40px;
    width:50%;
    background-color:white;
    display:flex;
    justify-content:space-between;`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;`



const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter