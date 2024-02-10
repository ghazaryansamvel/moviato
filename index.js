const movies = [
    { movieName: "Barbie", rating: 4.5, genre: "Comedy", views: 1.5 },
    { movieName: "Interstellar", rating: 3, genre: "Fantastic", views: 4.5 },
    { movieName: "The Godfather", rating: 9.77, genre: "Crime", views: 12 },
];

let sortByMovieName = (a, b) => a.movieName.localeCompare(b.movieName);

let sortByRating = (a, b) => b.rating - a.rating;

let sortByGenre = (a, b) => a.genre.localeCompare(b.genre);

let sortByViews = (a, b) => b.views - a.views;

let sortMovies = (movies, sortingFunction) => [...movies].sort(sortingFunction);


let sortedByMovieName = sortMovies(movies, sortByMovieName);
let sortedByRating = sortMovies(movies, sortByRating);
let sortedByGenre = sortMovies(movies, sortByGenre);
let sortedByViews = sortMovies(movies, sortByViews);


console.log(sortedByMovieName);
console.log(sortedByRating);
console.log(sortedByGenre);
console.log(sortedByViews);



