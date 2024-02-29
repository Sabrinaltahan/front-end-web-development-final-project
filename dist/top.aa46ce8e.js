async function e(){let e=`https://www.omdbapi.com/?s=top&type=movie&apikey=${key}`;try{let t=await fetch(e),o=await t.json();if("True"===o.Response)!function(e){let t=document.getElementById("top20-movies"),o="";e.forEach(e=>{o+=`
            <div class="top20-movie">
                <img src="${e.Poster}" alt="${e.Title}" class="top20-movie-poster">
                <div class="top20-movie-details">
                    <h3>${e.Title}</h3>
                    <p>Year: ${e.Year}</p>
                </div>
            </div>
        `}),t.innerHTML=o}(o.Search);else throw Error(o.Error)}catch(e){console.error("Error fetching top 20 movies:",e)}}document.getElementById("mode-toggle").addEventListener("click",function(){document.body.classList.toggle("dark")}),window.addEventListener("load",e);
//# sourceMappingURL=top.aa46ce8e.js.map
