const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * A list of the first ten movies 
 * @returns {Array} 
 * 
 */
function getFirstTenMovies(){
    //complete with your code

    const result = movies.map((movie) => movie.title).slice(0,9);
    console.log(result)
   

    
}

/**
 * Complete with a brief definition of what this function should do
 * Search the movies with the same genre, and return a list of them
 * @param  {String} genre - (str) genre of the movies
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
   
    const result= movies.filter((movie) => movie.genre === genre).map( (movie) => movie.title);
    console.log(result);

}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();