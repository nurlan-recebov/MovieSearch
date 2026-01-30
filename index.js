const input = document.querySelector('input');
const button = document.querySelector('button');
const moviesContent = document.querySelector('.movies');
button.addEventListener('click', getMovies)
function getMovies() {
    const searchTerm = input.value;
    fetch(`https://www.omdbapi.com/?apikey=11e06312&s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            show(data.Search);
})        .catch(error => {
            console.error('Error fetching data:', error);
        })}
function show(movies) {
    moviesContent.innerHTML = '';
  input.value = '';
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.src = movie.Poster ;
        const title = document.createElement('h4');
        title.textContent = movie.Title;
        card.appendChild(img);
        card.appendChild(title);
        moviesContent.appendChild(card);
        const year=document.createElement('p');
        year.textContent=`Year: ${movie.Year}`;
        card.appendChild(year);
            });
}