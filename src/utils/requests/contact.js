const API = 'https://api.elaniin.dev';

export default  async(data) => {
  try {
    const url = API + '/api/contact';

    const response = await fetch(url, {
      method: 'POST',
      body:JSON.stringify(data),
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
