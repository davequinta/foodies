import React, { useEffect, useState } from 'react';
import {
  GET_CATEGORIES,
  GET_MENU,
  GET_MENU_CATEGORY,
  GET_FILTER_MENU
} from '../../../utils/requests/menu';
import ProductCard from '../../menu/ProductCard';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Food404card from '../../emptystates/Food404card'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    outline: 'none',
    borderRadius: '8px',
    width: '80%',
    marginBottom: '2.5rem',
  },
}));
const MenuSectionContainer = () => {
  const [fetchingApi, setFetchingApi] = useState(true);
  const [query, setQuery] = useState('');

  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    getMenuByFilter();
  }, [query]);

  const getInitialData = async () => {
    const categoriesResponse = await GET_CATEGORIES();
    console.log('CATEGORIES', categoriesResponse);
    if (categoriesResponse.status)
      setCategories(categoriesResponse.message.data);
    getFullMenu();
  };

  const getFullMenu = async () => {
    const menuResponse = await GET_MENU();
        setFetchingApi(false);

    console.log('MENU', menuResponse);
    if (menuResponse.status) setMenu(menuResponse.message.data);

  };

  const getMenuByCategory = async (id) => {
    const menuResponse = await GET_MENU_CATEGORY(id);
    console.log('MENU', menuResponse);
    if (menuResponse.status) setMenu(menuResponse.message.data);
  };

  
  const getMenuByFilter = async () => {
    const menuResponse = await GET_FILTER_MENU(query);
    console.log('MENU', menuResponse);
    if (menuResponse.status) setMenu(menuResponse.message.data);
  };

  return (
    <section className=" w-full pt-10 ">
      <section className="flex flex-col xl:flex-row items-center mx-10 xl:mx-20">
        <TextField
          className={[classes.margin, 'max-w-md']}
          id="input-with-icon-textfield"
          variant="outlined"
           value={query}
          onChange={(value) => setQuery(value.target.value)}
          placeholder="Busca tu platillo favorito..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={'#FFF'} />
              </InputAdornment>
            ),
          }}
        />
        <div className="flex ml-4 items-center mb-10 hidden md:flex ">
          <span
            className="hover:bg-primary leading-3 mx-4 cursor-pointer"
            onClick={getFullMenu}
          >
            Todas
          </span>
          {categories.map((category) => (
            <div className="w-min">
              <span
                className="hover:bg-primary leading-3 mx-4 cursor-pointer"
                onClick={() => getMenuByCategory(category.id)}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {menu.length > 0 && !fetchingApi ? menu.map((product, index) => (
          <ProductCard {...product} key={`${product.name}-${index}`} />
        )):<Food404card/>}
       
      </div>
    </section>
  );
};

export default MenuSectionContainer;
