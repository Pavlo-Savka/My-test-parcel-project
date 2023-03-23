
const galleryNews = document.querySelector('.galleryNews');
let fawNews = [];
const appID = 'IIf4vmmTbfNyDLUoXuoPyrjTHkEJuSUj';
const category = "/viewed/7.json";
function fetchNews(categ) {
  fetch(
    `https://api.nytimes.com/svc/mostpopular/v2${categ}?api-key=${appID}`)
    .then(response => response.json())
    .then(text => {
      renderCard(text.results[0]);
    });
}

function renderCard(result) {
  const mediaUrl = result.media[0]['media-metadata'][2].url;
  const mediaAlt = result.media[0]['media-metadata'].caption;
  const newsCategory = result.section;
  const title = result.title;
  const subscribe = result.abstract;
  const date = result.published_date;
  const url = result.url;
  const ID = result.id;
  renderMarkup (mediaUrl, mediaAlt, newsCategory, title, subscribe, date, url, ID );
}

function renderMarkup(
  mediaUrl,
  mediaAlt,
  newsCategory,
  title,
  subscribe,
  date,
  url,
  ID
) {
  const markup = `
<div class="card">
<div class="card__img-wrapper">
<img class="card__img" src="${mediaUrl}" alt="${mediaAlt}"> 
 <button type="button" class="card__faw">Add to favorite</button>
</div>
<h2 class="card__title">${title}</h2>
<p class="card__subscribe">${subscribe}</p>
<span class="card__date">${date}</span>
<a href="${url}">
<span class="card__read-more">Read more</span>
</a>
</div>
`;
  galleryNews.insertAdjacentHTML('beforeend', markup);
}

fetchNews(category);