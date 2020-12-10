const API = 'https://api.elaniin.dev';

export const GET_LOCATIONS = async (type) => {
  try {
    const url = API + '/api/locations?type=' + type;
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

export const GET_FILTER_LOCATION = async (type, query) => {
  try {
    const url = API + '/api/locations?type=' + type + '&query='+query;
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
