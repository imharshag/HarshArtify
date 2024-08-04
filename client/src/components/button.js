import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  border-radius: 50px; 
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;
  background: black;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to right, white, pink, purple);
  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
  opacity: 0.4;
  cursor: not-allowed;
  `}
  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8;
  cursor: not-allowed;
`}
  ${({ flex }) =>
    flex &&
    `
    flex: 1;
`}
`;

const ButtonComponent = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  onClick,
  flex,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick()}
      isDisabled={isDisabled}
      isLoading={isLoading}
      flex={flex}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </Button>
  );
};

export default ButtonComponent;
