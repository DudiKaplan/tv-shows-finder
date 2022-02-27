import React from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(() => ({
  input: {
    color: 'white !important',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    ['@media (max-width:530px)']: {
      width: '92vw',
    }
  },
  icon: {
    color: 'white'
  }
}));

function Search({ getSearchTerm }) {

  const classes = useStyles();

  const handleChange = e => {
    getSearchTerm(e.target.value)
  }

  //console.log(getSearchValue)
  return (
    <TextField
      focused
      onChange={handleChange}
      placeholder='search ...'
      InputProps={{
        className: classes.input,
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon className={classes.icon} />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default Search
