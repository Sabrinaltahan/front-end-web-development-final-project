let e=document.getElementById("movie-name"),t=document.getElementById("search-btn"),a=document.getElementById("result");async function i(e){let t=`http://www.omdbapi.com/?t=${e}&apikey=${key}`;try{let e=await fetch(t),a=await e.json();if("True"===a.Response)return a;throw Error(a.Error)}catch(e){throw Error("Error fetching movie details")}}async function r(e){let t=`https://api.themoviedb.org/3/movie/${e}/reviews?api_key=${reviewAPIKey}`;try{let e=await fetch(t),a=await e.json();if(a.results&&a.results.length>0)return a.results;return null}catch(e){return console.error("Error fetching reviews:",e),null}}async function s(){let t=e.value.trim();if(0===t.length){a.innerHTML='<h3 class="msg">Please Enter A Movie Name</h3>';return}try{let e=await i(t);if(a.innerHTML=`
    <div class="info">
        <img src=${e.Poster} class="poster">
        <div>
            <h2>${e.Title}</h2>
            <div class="rating">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:AN\u{2026}HaC-_gMMbbaUnkpz4yp3Z0_TcFWdd3DeT5YiMiek&usqp=CAU">
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
  `,e.imdbID){let t=await r(e.imdbID);!function(e){let t=document.getElementById("reviews"),a="";e&&e.length>0?(a+="<h3>Reviews:</h3>",e.forEach(e=>{let t=e.content.substring(0,500)+"...";a+=`
        <div class="review">
          <div class="avatar">
            <img src="${e.author_details.avatar_path?"https://image.tmdb.org/t/p/w45_and_h45_bestv2"+e.author_details.avatar_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93xdF256EGJkJ32k4rKLx5JnO7-T1_lqT_Rm0egLC_w&s"}" alt="Avatar">
          </div>
          <div class="review-info">
            <p><strong>${e.author}</strong></p>
            <p>${t}</p>
            <a href="${e.url}" target="_blank" class="read-more-btn">Read More</a>
          </div>
        </div>`})):a+="<h3>No reviews available for this movie</h3>",t.innerHTML=a}(t)}}catch(e){a.innerHTML=`<h3 class='msg'>${e.message}</h3>`}}t.addEventListener("click",s),window.addEventListener("load",s);
//# sourceMappingURL=index.2fafed7b.js.map
