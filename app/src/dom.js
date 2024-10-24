export function updateDom(data) {
  const cityElement = document.getElementById('city');
  const countryElement = document.getElementById('country');
  const tempElement = document.getElementById('temp');
  const conditionsElement = document.getElementById('conditions');

  cityElement.textContent = data['city'];
  countryElement.textContent = data['country'];
  tempElement.textContent = `${data['tempCelsius']}°`;
  conditionsElement.textContent = data['conditions'];
}
