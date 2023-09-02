// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  

  function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
  
 
  const celsiusValue: number = 25; 
  const fahrenheitValue: number = 77; 
  
  const convertedFahrenheit: number = celsiusToFahrenheit(celsiusValue);
  const convertedCelsius: number = fahrenheitToCelsius(fahrenheitValue);
  
  console.log(`${celsiusValue} Celsius is equal to ${convertedFahrenheit} Fahrenheit`);
  console.log(`${fahrenheitValue} Fahrenheit is equal to ${convertedCelsius} Celsius`);
  