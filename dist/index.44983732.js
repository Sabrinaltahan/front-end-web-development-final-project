//Initial References
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
document.getElementById("mode-toggle").addEventListener("click", function() {
    // Toggle theme class on body
    document.body.classList.toggle("dark");
});
// Function to fetch movie details from OMDb API
async function fetchMovieDetails(movieName) {
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") return data;
        else throw new Error(data.Error);
    } catch (error) {
        throw new Error("Error fetching movie details");
    }
}
// Function to fetch movie reviews from TMDB API
async function fetchMovieReviews(imdbID) {
    const reviewUrl = `https://api.themoviedb.org/3/movie/${imdbID}/reviews?api_key=${reviewAPIKey}`;
    try {
        const response = await fetch(reviewUrl);
        const data = await response.json();
        if (data.results && data.results.length > 0) return data.results;
        else return null;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return null;
    }
}
// Function to display movie details on the UI
function displayMovieDetails(movieData) {
    result.innerHTML = `
    <div class="info">
        <img src=${movieData.Poster} class="poster">
        <div>
            <h2>${movieData.Title}</h2>
            <div class="rating">
                <img src="https://www.imageshine.in/uploads/gallery/Shining-Star-PNG.png">
                <h4>${movieData.imdbRating}</h4>
            </div>
            <div class="details">
                <span>${movieData.Rated}</span>
                <span>${movieData.Year}</span>
                <span>${movieData.Runtime}</span>
            </div>
            <div class="genre">
                <div>${movieData.Genre.split(",").join("</div><div>")}</div>
            </div>
        </div>
    </div>
    <h3>Plot:</h3>
    <p>${movieData.Plot}</p>
    <h3>Cast:</h3>
    <p>${movieData.Actors}</p>
  `;
}
// Function to display movie reviews on the UI
function displayMovieReviews(reviews) {
    const reviewsContainer = document.getElementById("reviews");
    let reviewsHTML = "";
    if (reviews && reviews.length > 0) {
        reviewsHTML += "<h3>Reviews:</h3>";
        reviews.forEach((review)=>{
            // Summarize the content to first 500 characters
            const summary = review.content.substring(0, 500) + "...";
            reviewsHTML += `
        <div class="review">
          <div class="avatar">
            <img src="${review.author_details.avatar_path ? "https://image.tmdb.org/t/p/w45_and_h45_bestv2" + review.author_details.avatar_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93xdF256EGJkJ32k4rKLx5JnO7-T1_lqT_Rm0egLC_w&s"}" alt="Avatar">
          </div>
          <div class="review-info">
            <p><strong>${review.author}</strong></p>
            <p>${summary}</p>
            <a href="${review.url}" target="_blank" class="read-more-btn">Read More</a>
          </div>
        </div>`;
        });
    } else reviewsHTML += "<h3>No reviews available for this movie</h3>";
    reviewsContainer.innerHTML = reviewsHTML;
}
// Function to handle search button click event
async function handleSearch() {
    const movieName = movieNameRef.value.trim();
    if (movieName.length === 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
        return;
    }
    try {
        const movieData = await fetchMovieDetails(movieName);
        displayMovieDetails(movieData);
        if (movieData.imdbID) {
            const reviews = await fetchMovieReviews(movieData.imdbID);
            displayMovieReviews(reviews);
        }
    } catch (error) {
        result.innerHTML = `<h3 class='msg'>${error.message}</h3>`;
    }
}
// Function to fetch data for the featured movie
async function fetchFeaturedMovie() {
    const url = `https://www.omdbapi.com/?t=featured_movie&apikey=${key}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") displayFeaturedMovie(data);
        else throw new Error(data.Error);
    } catch (error) {
        console.error("Error fetching featured movie:", error);
    }
}
// Function to display the featured movie on the webpage
function displayFeaturedMovie(movieData) {
    const featuredMovieContainer = document.getElementById("featured-movie");
    featuredMovieContainer.innerHTML = `
      <div class="featured-movie">
          <img src="${movieData.Poster}" alt="${movieData.Title}" class="featured-movie-poster">
          <div class="featured-movie-details">
              <h2>${movieData.Title} (Featured)</h2>
              <p>${movieData.Plot}</p>
              <p>Directed by: ${movieData.Director}</p>
              <p>Starring: ${movieData.Actors}</p>
          </div>
      </div>
  `;
}
// Add event listeners
searchBtn.addEventListener("click", handleSearch);
window.addEventListener("load", handleSearch);
window.addEventListener("load", fetchFeaturedMovie);

//# sourceMappingURL=index.44983732.js.map
