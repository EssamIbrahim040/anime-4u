
/* anime serch section */
const api_url = "https://api.jikan.moe/v4"

const searchText = document.querySelector("#searchText");
const searchResult = document.querySelector("#searchResult");


searchText.addEventListener("keyup",function(){
    if(this.value.length > 3) {
        getAnimes(this.value);
    }
})
async function getAnimes(query){
    const res = await fetch(`${api_url}/anime?q=${query}&sfw`)
    const animes = await res.json()
    
    if (animes.data.length > 0) {
        searchResult.style.display = "block";
        searchResult.innerHTML = ``;
            animes.data.map(anime => {
                searchResult.innerHTML += `
              <li class="singleAnime" data-image="${anime.images.jpg.image_url}">
              <a href ="${anime.url}" target="_blank">${anime.title}</a>
              </li>

           
            `;
            })

            const singleAnimes =  Array.from(document.querySelectorAll(".singleAnime"))
            const displayImage = document.querySelector("#displayImage");

            singleAnimes.map(singleAnime => {
                singleAnime.addEventListener("mouseenter", function(){
                    displayImage.style.display = "block";
                    displayImage.innerHTML=` <img src="${this.dataset.image}" >`;
                })  

                singleAnime.addEventListener("mousout", function(){
                    displayImage.style.display = "none";
                    
                })

                singleAnime.addEventListener("click", function(){
                    displayImage.style.display = "none";
                    
                })


            })


    }   
}

/* show trinding anime*/
const topTvAnime = document.querySelector("#topTvAnime")
async function getTopAnime(){
   const res = await fetch(`${api_url}/top/anime`);
   const topAnimes = await res.json()
   console.log(topAnimes.data);

  

   topAnimes.data.map(topAnime => {
    topTvAnime.innerHTML += `
    <div class="col-lg-3 col-md-6">
    <div class="item">
        <div class="thumb">
            <a href="${topAnime.url}"><img src="${topAnime.images.jpg.image_url}" alt=""></a>
            <span class="price">${topAnime.score}</span>
        </div>
        <div class="down-content">
            <span class="category">${topAnime.source}</span>
            <h4>${topAnime.title}</h4>
          
        </div>
        </div>
    </div> 
    `;
   })
}
getTopAnime()


/* show Most Played anime*/

const upxomingSeries = document.querySelector("#upxomingSeries")
async function getUpcomingSeries(){
   const res = await fetch(`${api_url}/seasons/upcoming`);
   const upxomingSerieses = await res.json()
   console.log(upxomingSerieses.data);

  

   upxomingSerieses.data.map(item => {
    upxomingSeries.innerHTML += `
    <div class="col-lg-2 col-md-6 col-sm-6">
        <div class="item">
        <div class="thumb">
            <a href="${item.url}"><img src="${item.images.jpg.image_url}" ></a>
        </div>
        <div class="down-content">
            <span class="category">${item.source}</span>
            <h4>${item.title.substring(0, 20)}</h4>
           
        </div>
        </div>
  </div>
    `;
   })
}
getUpcomingSeries()

/* chaneg the hero image */

const randomChart = document.querySelector("#randomChart");
async function getRandomChart(){
    const response = await fetch(`${api_url}/random/characters`);
    const RCD = await response.json();
    randomChart.innerHTML = `
    <img src="${RCD.data.images.jpg.image_url}" />
            <span class="price">${RCD.data.favorites}</span>
            <span class="name">${RCD.data.name}</span>
    `
}
getRandomChart()



/*  
Categories
*/

const animeCategorie = document.querySelector("#animeCategorie")
async function getCateigore(){
   const res = await fetch(`${api_url}/top/anime`);
   const topCateories = await res.json()
   console.log(topCateories.data);

  

   topCateories.data.map(topCate => {
    animeCategorie.innerHTML += `
    <div class="col-lg col-sm-6 col-xs-12">
    <div class="item">
     
      <div class="thumb">
        <a href="${topCate.url}"><img src="${topCate.images.jpg.image_url}" alt=""></a>

      </div>
      <h4>${topCate.title.substring(0, 10)}</h4>
    </div>
  </div>

    `;
   })
}
getCateigore()





/* show trinding anime*/
const shopAnime = document.querySelector("#shopAnime")
async function getTopAnime(){
   const res = await fetch(`${api_url}/top/anime`);
   const shopAnimes = await res.json()
   console.log(shopAnimes.data);

  

   shopAnimes.data.map(topAnime => {
    shopAnime.innerHTML += `
    <div class="col-lg-3 col-md-6">
    <div class="item">
    <article className="max-w-sm rounded overflow-hidden shadow-lg">
    <a rel="noopener noreferrer" href="#" aria-label={post.name}>
   <img src="" alt="">

    </a>
    <div className="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="#" aria-label=${topAnime.title}></a>
        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{post.username}</a>
         <a href="${topAnime.url}"><img src="${topAnime.images.jpg.image_url}" alt=""></a>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
            <span>${topAnime.source}</span>
            <span>${topAnime.score}</span>
        </div>
    </div>
</article>
        </div>
    </div> 
    `;
   })
}



/*
    <article className="max-w-sm rounded overflow-hidden shadow-lg">
            <a rel="noopener noreferrer" href="#" aria-label={post.name}>
           <img src="" alt="">

            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label=${topAnime.title}></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{post.username}</a>
                 <a href="${topAnime.url}"><img src="${topAnime.images.jpg.image_url}" alt=""></a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>${topAnime.source}</span>
                    <span>${topAnime.score}</span>
                </div>
            </div>
        </article>
        */



