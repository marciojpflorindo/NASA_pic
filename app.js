const API_KEY = NASA_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
let date = document.querySelector('.date');
let explanation = document.querySelector('.explanation');
let picture = document.querySelector('.pic');
let title = document.querySelector('.title');
let copyright = document.querySelector('.copyright');
let hiRes = document.querySelector('.hires');

fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
        if (data.code !== 400) {
            date.textContent = data.date;
            explanation.textContent = data.explanation;
            picture.src = data.url;
            title.textContent = data.title;
        } else {
            picture.src = 'https://picsum.photos/200';
            title.textContent = "Sorry! NASA API seems to be having some problems. Here's some random Picsum photos";
        }
        if (data.copyright !== undefined) {
            copyright.innerHTML = '&copy; ' + data.copyright;
        }

        hiRes.addEventListener('click', () => {
            hiRes.href = data.hdurl;
        });

    });