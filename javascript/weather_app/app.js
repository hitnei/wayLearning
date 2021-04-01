const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const textErr = document.querySelector(".text-err");
const forecast = new Forecast()

const updateUI = (data) => {
  const { cityDets, weather } = data;

  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
  </div>`;

  const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = weather.IsDayTime ? "./img/day.svg" : "./img/night.svg";

  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  if (city !== "") {
    cityForm.reset();

    forecast.updateCity(city)
      .then((data) => {
        updateUI(data);
        // set local storage
        localStorage.setItem('city', city);
        textErr.classList.add("d-none");
      })
      .catch((err) => {
        console.log(err);
        card.classList.add("d-none");
        textErr.classList.remove("d-none");
      });
  } else {
    textErr.classList.add("d-none");
  }
});

if (localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city'))
    .then((data) => {
      updateUI(data);
      textErr.classList.add("d-none");
    })
    .catch((err) => {
      console.log(err);
      card.classList.add("d-none");
      textErr.classList.remove("d-none");
    });
}