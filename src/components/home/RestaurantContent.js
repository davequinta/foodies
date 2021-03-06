import React, { useEffect, useState } from 'react';
import SearchInput from '../common/SearchInput';
import {
  GET_LOCATIONS,
  GET_FILTER_LOCATION,
} from '../../utils/requests/locations';
import Fade from 'react-reveal/Fade';

import RestaurantCard from './RestaurantCard';
import zIndex from '@material-ui/core/styles/zIndex';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Res404card from '../emptystates/Res404card'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    outline: 'none',
    // backgroundColor: '#fff',
    borderRadius: '8px',
    width: '80%',
    marginBottom: '2.5rem',
  },
}));
const RestaurantContent = () => {
    const classes = useStyles();

  const [fetchingApi, setFetchingApi] = useState(true);
  const [location, setLocation] = useState([]);
  const [type, setType] = useState('takeaway');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getInitialData();
  }, [type]);

  useEffect(() => {
    getFiltered();
  }, [query]);

  const getInitialData = async () => {
    setQuery('')
    const locationResponse = await GET_LOCATIONS(type);
    console.log('LOCATIONS', locationResponse);
    if (locationResponse.status) setLocation(locationResponse.message.data);

    setFetchingApi(false);
  };

  
  const getFiltered = async () => {
    const locationResponse = await GET_FILTER_LOCATION(type,query);
    console.log(query)
    console.log('LOCATIONS', locationResponse);
    if (locationResponse.status) setLocation(locationResponse.message.data);

    setFetchingApi(false);
  };

  return (
    <div id='restaurant' className="flex flex-col justify-center p-2 h-full">
      <Fade left><h1 className="text-4xl w-full mb-4 ">Estamos para ti</h1></Fade>
      <div className="flex flex-row content-center ">
        <div
          className=" border-black border-solid border-2 flex flex-row space-x-4 p-4 w-full hover:text-white hover:bg-black	"
          onClick={() => setType('takeaway')}
        >
          <img src="/takeaway.png" />
          <p>Para llevar</p>
        </div>
        <div
          className="border-black border-solid border-2 flex flex-row space-x-4  w-full	p-4 hover:text-white hover:bg-black	"
          onClick={() => setType('delivery')}
        >
          <img src="/delivery.png" />
          <p>Domicilio</p>
        </div>
      </div>
 <TextField
          className={['w-full']}
          id="input-with-icon-textfield"
          variant="outlined"
          value={query}
          onChange={(value) => setQuery(value.target.value)}
          placeholder="Busca nombre o direccion"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={'#FFF'} />
              </InputAdornment>
            ),
          }}
        />      
        <div className=" flex-wrap items-center justify-center mt-3 flex flex-col p-2">
      {location.length > 0 ?   location.map((location, index) => (
          <RestaurantCard {...location} key={`${location.id}-${index}`} />
        )):<Res404card/>}
      </div>
    </div>
  );
};

export default RestaurantContent;
