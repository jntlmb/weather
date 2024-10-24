import './styles/input.css';
import { getWeather } from './weather';
import { processData } from './weather';
import { updateDom } from './dom';

const search = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', async (e) => {
  e.preventDefault();

  const currentSearch = search.value;

  getWeather(currentSearch).then((data) => {
    const processedData = processData(data);
    updateDom(processedData);
  });
});

window.addEventListener('load', () => {
  getWeather('London').then((data) => {
    const processedData = processData(data);
    updateDom(processedData);
  });
});
