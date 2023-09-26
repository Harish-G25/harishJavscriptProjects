const btn = document.querySelector('.container-btn');
const para = document.querySelector('.container-para');

btn.addEventListener('click', getJoke);

async function getJoke() {
  try {
    para.textContent = 'Updating...';
    btn.disabled = true; // Use "disabled" instead of "disable"
    btn.textContent = 'Loading...';

    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });

    const data = await response.json();
    para.textContent = data.joke;
  } catch (error) {
    para.textContent = 'Error. Please try again later.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'TELL ME A JOKE';
  }
}
