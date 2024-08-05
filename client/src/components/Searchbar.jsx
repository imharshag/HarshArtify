import React from 'react';
import styled from 'styled-components';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary + '90'};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  width: 90%;
  cursor: pointer;
  gap: 8px;
  align-items: center;
  background: ${({ theme }) => theme.background_secondary}; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: inherit;
  background: transparent;
  font-size: 16px;
  }
`;

const Searchbar = () => {
  return (
    <SearchContainer>
      <SearchRoundedIcon />
      <Input placeholder="Search with Prompt or Name..." />
    </SearchContainer>
  );
};

export default Searchbar;
