import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

import styled from 'styled-components';

import Option from './_components/Option';
import OptionsWrapper from './_components/OptionsWrapper';

import productsAPI from '../../api';

const StyledInput = styled(OutlinedInput)`
  && {
    color: ${({ theme }) => theme.color.primary};

    & > fieldset {
      border-color: ${({ theme }) => theme.color.primary};

      transition: border-color 0.2s;
    }

    &:hover {
      & > fieldset {
        border-color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`;

const StyledPopper = styled(Popper)`
  z-index: 2;
`;

const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const anchorRef = useRef(null);

  const handleOnChange = (event) => setSearchQuery(event.target.value);

  const handleOptionClick = (id) => {
    router.push(`/product/${id}`);
    setSearchQuery('');
    setResults([]);
  };

  useEffect(() => {
    setResults(productsAPI.fetchProductsByQuery(searchQuery));
  }, [searchQuery]);

  return (
    <Box
      padding={1}
      ref={anchorRef}
      position="relative"
    >
      <StyledInput
        type="search"
        placeholder="Search games"
        value={searchQuery}
        onChange={handleOnChange}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon color="inherit" />
          </InputAdornment>
        }
      />

      {(searchQuery && results) && (
        <StyledPopper
          open={searchQuery && results.length !== 0}
          transition
          disablePortal
          anchorEl={anchorRef.current}
          modifiers={{ flip: { enabled: false } }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <OptionsWrapper>
                  {results.map((item, i) => (
                    <Option
                      key={i}
                      item={item}
                      onClick={() => handleOptionClick(item.id)}
                    />
                  ))}
                </OptionsWrapper>
              </Paper>
            </Fade>
          )}
        </StyledPopper>
      )}
    </Box>
  )
};

export default Search
