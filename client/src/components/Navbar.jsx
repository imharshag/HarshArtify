import React from 'react';
import { AddCircleRounded,  ExploreSharp } from "@mui/icons-material";
import styled from "styled-components";
import {useNavigate,useLocation} from "react-router-dom";
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
  background: linear-gradient(135deg, white, pink, #BF00FF); 
  background-clip: text;
  color: transparent;
  font-size: 22px; 
`;

const Navbar = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const path=location.pathname.split("/");
  return (
    <Container>
      <GradientText>HarshArtify©</GradientText>
      {path[1]==="post"?
      (
        <Button onClick={()=>navigate("/")} text="Explore" leftIcon={<ExploreSharp style={{ fontSize: "18px" }} />} />
      ):
        (
          <Button onClick={()=>navigate("/post")} text="Generate" leftIcon={<AddCircleRounded style={{ fontSize: "18px" }} />} />
        )
      }
    </Container>
  );
};

export default Navbar;
