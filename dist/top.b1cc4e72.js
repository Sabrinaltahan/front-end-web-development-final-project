// Function to fetch data for the top 20 movies
async function fetchTop20Movies() {
    const url = `https://www.omdbapi.com/?s=top&type=movie&apikey=${key}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") displayTop20Movies(data.Search);
        else throw new Error(data.Error);
    } catch (error) {
        console.error("Error fetching top 20 movies:", error);
    }
}
// Function to display the top 20 movies on the webpage
function displayTop20Movies(movies) {
    const top20MoviesContainer = document.getElementById("top20-movies");
    let html = "";
    movies.forEach((movie)=>{
        html += `
            <div class="top20-movie">
                <img src="${movie.Poster}" alt="${movie.Title}" class="top20-movie-poster">
                <div class="top20-movie-details">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                </div>
            </div>
        `;
    });
    top20MoviesContainer.innerHTML = html;
}
document.getElementById("mode-toggle").addEventListener("click", function() {
    // Toggle theme class on body
    document.body.classList.toggle("dark");
});
window.addEventListener("load", fetchTop20Movies);

//# sourceMappingURL=top.b1cc4e72.js.map
