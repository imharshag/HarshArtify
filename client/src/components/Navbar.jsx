import React from 'react';
import { AddRounded } from "@mui/icons-material";
import styled from "styled-components";
import Button from "./button";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);

  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, white, pink, #BF00FF); /* Vibrant purple */
  background-clip: text;
  color: transparent;
  font-size: 22px; /* Match font size for consistency */
`;

const Navbar = () => {
  return (
    <Container>
      <GradientText>HarshArtify©</GradientText>
      <Button text="Create your Art" leftIcon={<AddRounded style={{ fontSize: "18px" }} />} />
    </Container>
  );
};

export default Navbar;
