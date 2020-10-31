import axios from 'axios';

const jokeApi = 'https://official-joke-api.appspot.com/random_joke';

const getJoke = () => new Promise((resolve, reject) => {
  axios
    .get(jokeApi)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

export default { getJoke };
