import jokeData from '../helpers/data/jokeData';

const makeJoke = () => {
  jokeData.getJoke().then((response) => {
    $('#joke-container').html(`
        <h2>${response.setup}</h2>
        <div id="punchline">
          <button>Punchline</button>
        <div>
      `);

    $('#punchline').on('click', 'button', () => {
      $('#punchline').html(`<h1>${response.punchline}<h1>`);
    });
  });
};

export default { makeJoke };
