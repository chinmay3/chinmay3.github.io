import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    flex-wrap:wrap;
    `

const Products = () => {
  return ( 
    <Container>
        {popularProducts.map(item=>(
            <Product item={item}/>
        ))}
    </Container>
  )
}

export default Products