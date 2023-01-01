// extracting the 'form' from our index.html
const form = document.querySelector("#weather-form");

// adding an event listener to our form
form.addEventListener("submit", (onSubmitEvent) => {
  onSubmitEvent.preventDefault();

  // get input from user
  // we do not extract value here BECAUSE the user might enter a space. Therefore braking our app
  // more testing needed to compensate for this.
  const location = onSubmitEvent.target.weather_submit;

  const BASE_URL = `https://wttr.in/${location.value}?format=j1`;

  displayResponse(BASE_URL);
});

function displayResponse(BASE_URL) {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then(({ current_condition, nearest_area, request, weather }) => {
      console.log(current_condition);
      console.log(nearest_area);
      console.log(weather);
    });
}
