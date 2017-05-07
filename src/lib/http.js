import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://free-api.heweather.com/v5/',
});
const key = '75cb08577a7645c88113b9341450f4d8';

const getWeatherByCity = (city, onSuccess, onError) => {
  instance.get('weather', {
    params: {
      city,
      key,
    },
  }).then(
    (response) => {
      onSuccess(response);
    },
  ).catch(
    (error) => {
      onError(error);
    },
  );
};

export default getWeatherByCity;
