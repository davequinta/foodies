const API = 'https://api.elaniin.dev';

export const GET_CATEGORIES = async () => {
  try {
    const url = API + '/api/categories';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const second_response = await response.json();
    if (response.status === 200) {
      return { status: true, message: second_response };
    } else {
      throw new Error(second_response);
    }
  } catch (error) {
    return { status: false, message: error };
  }
};

export const GET_MENU = async (page) => {
  try {
    const url = API + '/api/menu?page=' + page;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const second_response = await response.json();
    if (response.status === 200) {
      return { status: true, message: second_response };
    } else {
      throw new Error(second_response);
    }
  } catch (error) {
    return { status: false, message: error };
  }
};

export const GET_MENU_CATEGORY = async (id) => {
  try {
    const url = API + '/api/menu?category=' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const second_response = await response.json();
    if (response.status === 200) {
      return { status: true, message: second_response };
    } else {
      throw new Error(second_response);
    }
  } catch (error) {
    return { status: false, message: error };
  }
};

export const GET_FILTER_MENU = async (query) => {
  try {
            console.log('QUERY321',query)

    const url = API + '/api/menu?query=' + query;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const second_response = await response.json();
        console.log('QUERY',second_response)

    if (response.status === 200) {
      return { status: true, message: second_response };
    } else {
      throw new Error(second_response);
    }
  } catch (error) {
    return { status: false, message: error };
  }
};