import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import Badge  from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height:60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between; 
`

/*instead of width=33.3% we can use flex:1*/
/*align items center for all the stuff in left*/
const Left = styled.div`
  flex:1;
  display:flex;         
  align-items:center;
`

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`
const Center = styled.div`
  flex:1;
  text-align:center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
/*input is still not centered do display flex in it too*/
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display:flex;
  align-items:center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border:none;`

const Logo = styled.h1`
  font-weight:bold;
  cursor:pointer;`

const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;`


function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{color:"gray", fontSize:16}}/>
              {/*can change style of icons*/}
            </SearchContainer>
          </Left>
          <Center><Logo onClick={() => navigate("/")}>ShoeFactory.</Logo></Center>
          <Right>
            <MenuItem onClick={() => navigate("/register")}>REGISTER</MenuItem>
            <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon onClick={() => navigate("/cart")}/>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar