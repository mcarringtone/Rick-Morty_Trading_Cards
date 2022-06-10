fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => Cards(data.results));

function Cards(stuff) {
  const cardContainer = document.querySelector("#card-group");
  console.log(stuff);
  stuff.forEach((character) => {
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `
      <div class = "card">
      <img src=${character.image} class="card-image"></img>
      <div class = "card-title">${character.status}</div>
      <div class = "card-text">${character.name}</div
      </div>
      <br>
     `;
  });
}
