const apiKey = 'N9HWGPUV3Y8SBPBWWGLU9XXZW';

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`
    );

    if (!response.ok) {
      alert('City Not Found');
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

export function processData(data) {
  const address = data['resolvedAddress'].split(', ');
  const city = address[0];
  const country = address.at(-1);

  const conditions = data['currentConditions']['conditions'];
  const tempFahrenheit = data['currentConditions']['temp'];
  const tempCelsius = fahrenheitToCelsius(tempFahrenheit);

  return {
    city: city,
    country: country,
    conditions: conditions,
    tempFahrenheit: tempFahrenheit,
    tempCelsius: tempCelsius,
  };
}

function fahrenheitToCelsius(temp) {
  return Math.floor(((temp - 32) * 5) / 9);
}
