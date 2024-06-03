
const allAnime = document.querySelector("#allAnime")
async function getAllAnime(){
   const res = await fetch(`${api_url}/top/anime`);
   const allAnimes = await res.json()
   console.log(allAnimes.data);

  

   allAnimes.data.map(item => {
    allAnime.innerHTML += `
    <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
          <div class="item">
            <div class="thumb">
              <a href="${item.url}"><img src="${item.images.jpg.image_url}" alt=""></a>
              <span class="price">${item.score}</span>
            </div>
            <div class="down-content">
              <span class="category">${item.source}</span>
              <h4>${item.title}</h4>
              
            </div>
          </div>
        </div>
    `;
   })
}
getAllAnime()


/*
 
*/