import { API_URL, GET } from 'api/constants';

const request = async({ route, method = GET }: any) => {
  try {
    const url = `${API_URL}${route}`;
    const response = await fetch(url, { method });
    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

export default request;
