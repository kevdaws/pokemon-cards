const cards = document.querySelector('#cards');

var button = document.getElementById('submit');
button.addEventListener('click', createAPIURL);

var input = document.getElementById('pokemon');

function createAPIURL() {
  api_path = "https://api.pokemontcg.io/v1/cards?name="
  api_url = api_path + input.value
  console.log(input.value);
  getPokemonCards(api_url);
}

async function getPokemonCards(api_url) {

  // reset pokemon cards.
  document.getElementById('cards').innerHTML = "";
  
  const response = await fetch(api_url);
  console.log(response);
  const json = await response.json();
  
  json.cards.forEach((card) => {
    const image = document.createElement('img');
    const rarity = document.createElement('span');
    image.src = card.imageUrl;
    rarity.innerHTML = new String(card.rarity);
    //console.log(card.rarity);
    cards.append(image);
  });
}

// Load random cards when page loads.
createAPIURL();

