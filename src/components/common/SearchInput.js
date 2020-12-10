import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    borderColor: 'gray',
    outline: 'none',
    backgroundColor: '#fff',
    borderRadius: '8px',
    width: '80%',
    marginBottom: '2.5rem',
  },
}));
export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} h-full='true' noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          placeholder="Buscar nombre o dirección"
          fullWidth
          margin="normal"
           InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={'#FFF'} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />   
    </form>
  );
}