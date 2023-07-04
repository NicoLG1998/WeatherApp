const container = document.querySelector('.Contenedor');
const search = document.querySelector('.search button');
const weatherBox = document.querySelector('.Clima');
const weatherDetails = document.querySelector('.Detalles-Clima');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '18847eec90af9e332d5bb0c5f7ed5d37'
    const city = document.querySelector('.search input').value;

    if (city === '')
        return;
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if(json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.Clima img');
            const temperature = document.querySelector('.Clima .Temperatura');
            const description = document.querySelector('.Clima .Descripcion');
            const humidity = document.querySelector('.Detalles-Clima .Humedad span');
            const wind = document.querySelector('.Detalles-Clima .Viento span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'imagenes/Despejado.png';
                    break;

                case 'Rain':
                    image.src = 'imagenes/Lluvia.png';
                    break;

                case 'Clouds':
                    image.src = 'imagenes/Nublado.png';
                    break;

                case 'Snow':
                    image.src = 'imagenes/Nieve.png';
                    break;

                case 'Mist':
                    image.src = 'imagenes/Neblina.png';
                    break;
                
                case 'Thunderstorm':
                    image.src = 'imagenes/Tormenta.png';
                    break;

                case 'Drizzle':
                       image.src = 'imagenes/Lluvia.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

        });

});