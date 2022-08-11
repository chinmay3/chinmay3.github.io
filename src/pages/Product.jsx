import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons";


const Container = styled.div``
const Wrapper = styled.div`
    margin:40px;
    display:flex;`
const ImageContainer = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    flex:1;
`
const Info = styled.div`
    flex:1;
    padding: 0px 50px;`
const Title = styled.h1`
    margin-bottom:20px;
    font-weight:200;`

const Desc = styled.p`
    margin-bottom:20px;`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`margin-top:20px;
    display:flex;
    justify-content:space-between;
    width:55%;`
const Filter = styled.div`
    display:flex;
    align-items:center;`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color:${props => props.color};
    margin:10px;
    cursor: pointer;`

const FilterSizeOption = styled.option``
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const AddContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:55%;
    align-items: center;`
const AmountContainer = styled.div`display:flex;
    align-items:center;`
const Amount = styled.div`
    border:2px solid teal;
    padding:5px 10px;
    border-radius:30%;
    margin:20px;`

const Button = styled.button`
    padding:15px 20px;
    background-color:white;
    border: 2px solid teal;
    cursor: pointer;
    &:hover{background-color: #f8f4f4}`
const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <hr></hr>
        <Wrapper>
            <ImageContainer src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b1cdd38802d940e187e3ae98016ad0d0_9366/Superstar_Vegan_Shoes_White_GY4656_01_standard.jpg" />
            <Info>
                <Title>Adidas</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam minus explicabo eum incidunt ad aspernatur, nihil, veniam eligendi sint in! Enim ut illo quae hic aut perspiciatis facere ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas recusandae dignissimos facere voluptatibus alias dolore nostrum non, perspiciatis incidunt molestias blanditiis perferendis tempore rem velit id ipsa. Eaque, blanditiis magnam? Lorem</Desc>
                <Price>$ 200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="blue"></FilterColor>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="brown"></FilterColor>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </Info>
        </Wrapper>
        <hr></hr>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product