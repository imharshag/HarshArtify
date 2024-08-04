import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;


const CreatePost = () => {
  return (
    <Container>
        Create
    </Container>
  )
}

export default CreatePost