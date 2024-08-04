import React from 'react';
import styled from 'styled-components';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom:50px;
  display:flex;
  flex-direction :column;
  align-items:center;
  gap:20px;
  @media(max-width:768px){
  padding:6px 10px;
  }


  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

 const Headline=styled.div`
 font-size:34px;;
 color: ${({ theme }) => theme.text_primary};
 display:flex;
 flex-direction :column;
 align-items:center;
   @media(max-width:600px){
   font-size:22px;;
  }
`;

const Span=styled.div`
  font-size:30px;;
  font-weight:200px;
 color: ${({ theme }) => theme.text_primary};
`;

const Home = () => {
  return (
    <Container>
    <Headline>See the Top Community Favorites!</Headline>
    <Span>Generated by AI <AutoAwesomeRoundedIcon/></Span>
    </Container>
  );
};

export default Home;
