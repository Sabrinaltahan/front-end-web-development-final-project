let e=document.getElementById("movie-name"),t=document.getElementById("search-btn"),i=document.getElementById("result");async function a(e){let t=`https://www.omdbapi.com/?t=${e}&apikey=${key}`;try{let e=await fetch(t),i=await e.json();if("True"===i.Response)return i;throw Error(i.Error)}catch(e){throw Error("Error fetching movie details")}}async function r(e){let t=`https://api.themoviedb.org/3/movie/${e}/reviews?api_key=${reviewAPIKey}`;try{let e=await fetch(t),i=await e.json();if(i.results&&i.results.length>0)return i.results;return null}catch(e){return console.error("Error fetching reviews:",e),null}}async function s(){let t=e.value.trim();if(0===t.length){i.innerHTML='<h3 class="msg">Please Enter A Movie Name</h3>';return}try{let e=await a(t);if(i.innerHTML=`
    <div class="info">
        <img src=${e.Poster} class="poster">
        <div>
            <h2 class='movie-title'>${e.Title}</h2>
            <div class="rating">
                <img src="https://www.imageshine.in/uploads/gallery/Shining-Star-PNG.png">
                <h4>${e.imdbRating}</h4>
            </div>
            <div class="details">
                <span>${e.Rated}</span>
                <span>${e.Year}</span>
                <span>${e.Runtime}</span>
            </div>
            <div class="genre">
                <div>${e.Genre.split(",").join("</div><div>")}</div>
            </div>
        </div>
    </div>
    <h3>Plot:</h3>
    <p>${e.Plot}</p>
    <h3>Cast:</h3>
    <p>${e.Actors}</p>
  `,e.imdbID){let t=await r(e.imdbID);!function(e){let t=document.getElementById("reviews"),i="";e&&e.length>0?(i+="<h3>Reviews:</h3>",e.forEach(e=>{let t=e.content.substring(0,500)+"...";i+=`
        <div class="review">
          <div class="avatar">
            <img src="${e.author_details.avatar_path?"https://image.tmdb.org/t/p/w45_and_h45_bestv2"+e.author_details.avatar_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93xdF256EGJkJ32k4rKLx5JnO7-T1_lqT_Rm0egLC_w&s"}" alt="Avatar">
          </div>
          <div class="review-info">
            <p><strong>${e.author}</strong></p>
            <p>${t}</p>
            <a href="${e.url}" target="_blank" class="read-more-btn">Read More</a>
          </div>
        </div>`})):i+="<h3>No reviews available for this movie</h3>",t.innerHTML=i}(t)}}catch(e){i.innerHTML=`<h3 class='msg'>${e.message}</h3>`}}t.addEventListener("click",s),window.addEventListener("load",s);
//# sourceMappingURL=index.2d74023c.js.map
