fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => Cards(data.results));

function Cards(stuff) {
  const cardContainer = document.querySelector("#card-group");
  console.log(stuff);
  stuff.forEach((character) => {
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `<div class ="card-container">
      <div class = "card">
      <img src=${character.image} class="card-image"></img>

      <div class = "card-title">${character.status}</div>
      <divs class = "card-text">${character.name}</divs
      
    </div>
    </div>
    <br>
     `;
  });
}

// <h2 class="card-title">${character.name}<h2>
// <h4 class="card-title">Status:${character.status}</h4>
// <h4 class="card-title">Species:${character.status}</h4>
// <h4 class="card-title">Species:${character.species}</h4>
// <h4 class="card-title">Species:${character.gender}</h4>
//  <img src=${character.image} class="card-title"></img>
