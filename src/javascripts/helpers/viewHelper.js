import joke from '../components/joke';

const viewListener = () => {
  $('#app').html(`<button id="get-joke">Get a Joke</button>
                  <div id="joke-container"></div>`);

  $('#get-joke').on('click', () => {
    joke.makeJoke();
  });
};

export default { viewListener };
