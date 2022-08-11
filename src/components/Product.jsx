import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    position:relative;
    background-color:#eceff1;`

const Image = styled.img`
    height:75%;`

const Info = styled.div`
    opacity:0;
    display:flex;
    position:absolute;
    left:0;
    top:0;
    background-color:rgba(0,0,0,0.2);
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    z-index:2;
    transition:0.5s all ease;
    &:hover{
        opacity:1;
    }
    `

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:0.5s all ease;
    z-index:1;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
    cursor:pointer;`

const Product = ({item}) => {
    const navigate = useNavigate();
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon onClick={() => navigate("/cart")}/> 
            </Icon>
            <Icon>
                <SearchOutlinedIcon onClick={() => navigate("/product")}/> 
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon /> 
            </Icon>
        </Info>
    </Container>
  )
}

export default Product