'use strict';

// QUERYSELECTOR

const charactersList = document.querySelector('.js-characters-list');
const searchBtn = document.querySelector('.js-search-btn');
const input = document.querySelector('.js-input');
const sectionFavourites = document.querySelector('.js-section-favourites');
const favouritesList = document.querySelector('.js-favourites-list');
const deleteBtn = document.querySelector('.js-delete-btn');

// VARIABLES GLOBALES -> VARIABLES CON DATOS DE LA APP

let allCharacters = [];
let favouriteCharacters = [];

// FUNCIONES

/* 2.1 INICIO: Función que recoge los personajes del servidor y los pinta manipulando de forma avanzada el DOM */

function renderOneCharacter(oneCharacter){
  const favouriteCharacterIndex = favouriteCharacters.findIndex((eachCharacterObj) => eachCharacterObj.char_id === oneCharacter.char_id);
  let classFavourite = '';
  if (favouriteCharacterIndex === -1){
    classFavourite = '';
  } else {
    classFavourite = 'selected';
  }
  const liElement = document.createElement('li');
  liElement.setAttribute('class', `${classFavourite}`);
  liElement.classList.add('characters');
  liElement.classList.add('js-characters-card');
  liElement.setAttribute('id', `${oneCharacter.char_id}`);
  const articleElement = document.createElement('article');
  articleElement.classList.add('characters__card');
  const imgElement = document.createElement('img');
  imgElement.classList.add('characters__card--img');
  imgElement.setAttribute('src', `${oneCharacter.img}`);
  imgElement.setAttribute('alt', `${oneCharacter.name}`);
  const titleElement = document.createElement('h2');
  titleElement.classList.add('characters__card--name');
  const titleElementContent = document.createTextNode(`${oneCharacter.name}`);
  titleElement.appendChild(titleElementContent);
  const textElement = document.createElement('p');
  textElement.classList.add('characters__card--text');
  const textElementContent = document.createTextNode(`${oneCharacter.status}`);
  textElement.appendChild(textElementContent);
  liElement.appendChild(articleElement);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(titleElement);
  articleElement.appendChild(textElement);
  return liElement;
}

function renderAllCharacters(characters){
  charactersList.innerHTML = '';
  for (let i = 0; i < characters.length; i++){
    charactersList.appendChild(renderOneCharacter(characters[i]));
  }
  addListenersCharacters();
}

/* 3.1 BÚSQUEDA: Función que se activa con el evento click del botón, recoge el valor del input, se lo pasa a la función de filtrar y esta se lo pasa a la de renderizar el personaje filtrado */

function filterCharacters(value){
  return allCharacters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(value));
}

function handleClickSearch(event) {
  event.preventDefault();
  const valueInput = input.value.toLowerCase();
  renderAllCharacters(filterCharacters(valueInput));
}

/* 4. FAVORITOS Y 5. LOCAL STORAGE: */

function addListenersCharacters(){
  const allCards = document.querySelectorAll('.js-characters-card');
  for (const eachCard of allCards){
    eachCard.addEventListener('click', handleClickCard);
  }
}

function renderOneFavourite(favCharacter){
  sectionFavourites.style = 'display: none; display: block;';
  deleteBtn.style = 'display: none; display: block;';
  const favouriteCharacterIndex = favouriteCharacters.findIndex((eachFavouriteObj) => eachFavouriteObj.char_id === favCharacter.char_id);
  let classFavourite = '';
  if (favouriteCharacterIndex === -1){
    classFavourite = '';
  } else {
    classFavourite = 'selected';
  }
  const liElement = document.createElement('li');
  liElement.setAttribute('class', `${classFavourite}`);
  liElement.classList.add('favourites');
  liElement.classList.add('js-favourites-card');
  liElement.setAttribute('id', `${favCharacter.char_id}`);
  const divElement = document.createElement('div');
  divElement.classList.add('favourites__erase');
  divElement.classList.add('js-favourites-erase');
  divElement.setAttribute('id', `${favCharacter.char_id}`);
  const divElementContent = document.createTextNode(`x`);
  divElement.appendChild(divElementContent);
  const articleElement = document.createElement('article');
  articleElement.classList.add('favourites__card');
  const imgElement = document.createElement('img');
  imgElement.classList.add('favourites__card--img');
  imgElement.setAttribute('src', `${favCharacter.img}`);
  imgElement.setAttribute('alt', `${favCharacter.name}`);
  const titleElement = document.createElement('h2');
  titleElement.classList.add('favourites__card--name');
  const titleElementContent = document.createTextNode(`${favCharacter.name}`);
  titleElement.appendChild(titleElementContent);
  const textElement = document.createElement('p');
  textElement.classList.add('favourites__card--text');
  const textElementContent = document.createTextNode(`${favCharacter.status}`);
  textElement.appendChild(textElementContent);
  liElement.appendChild(divElement);
  liElement.appendChild(articleElement);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(titleElement);
  articleElement.appendChild(textElement);
  return liElement;
}

function renderAllFavourites(){
  favouritesList.innerHTML = '';
  if (favouriteCharacters.length === 0){
    sectionFavourites.style = 'display: block; display: none;';
  } else {
    for (let i = 0; i < favouriteCharacters.length; i++){
      favouritesList.appendChild(renderOneFavourite(favouriteCharacters[i]));
    }
  }
  addListenersFavourites();
}

function handleClickCard(event){
  event.currentTarget.classList.toggle('selected');
  const selectedCharacter = allCharacters.find((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));
  const favouriteCharacterIndex = favouriteCharacters.findIndex((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));
  if (favouriteCharacterIndex === -1){
    favouriteCharacters.push(selectedCharacter);
  } else {
    favouriteCharacters.splice(favouriteCharacterIndex, 1);
  }
  localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
  renderAllFavourites();
}

const savedFavourites = JSON.parse(localStorage.getItem('favourites'));
if (savedFavourites !== null ){
  favouriteCharacters = savedFavourites;
  renderAllFavourites();
  deleteBtn.style = 'display: none; display: block;';
}

/* 6. BONUS: BORRAR FAVORITOS */

function addListenersFavourites(){
  const allErase = document.querySelectorAll('.js-favourites-erase');
  for (const eachErase of allErase){
    eachErase.addEventListener('click', handleClickCross);
  }
}

function handleClickCross(event){
  const favouriteCharacterIndex = favouriteCharacters.findIndex((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));
  const liElements = document.querySelectorAll('.js-characters-card');
  const selectedCharacter = Array.from(liElements).find((eachCharacterLi) => eachCharacterLi.id === event.currentTarget.id);
  selectedCharacter.classList.remove('selected');
  favouriteCharacters.splice(favouriteCharacterIndex, 1);
  localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
  renderAllFavourites();
}

function handleClickErase(){
  favouriteCharacters = [];
  sectionFavourites.style = 'display: block; display: none;';
  localStorage.removeItem('favourites');
  const allCards = document.querySelectorAll('.js-characters-card');
  for (let eachCard of allCards){
    if (eachCard.classList.contains('selected')){
      eachCard.classList.remove('selected');
    }
  }
}

// EVENTOS

searchBtn.addEventListener('click', handleClickSearch);
deleteBtn.addEventListener('click', handleClickErase);

// PETICIONES AL SERVIDOR

const serverUrl = './assets/data/characters.json';

fetch(serverUrl, {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
})
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderAllCharacters(allCharacters);
  });