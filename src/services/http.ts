import axios, { AxiosResponse } from 'axios';

const fetchData = async (ipAddress:string): Promise<void> => {
  const url: string = 'https://geo.ipify.org/api/v2/country,city';
  const apiKey: string = 'at_HshecgaA3NBGu1wgtzZrgZrZX9SdD';
//   const ipAddress: string = '5.114.2.217';

  try {
    const response: AxiosResponse = await axios.get(url, {
      params: {
        apiKey,
        ipAddress
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchData