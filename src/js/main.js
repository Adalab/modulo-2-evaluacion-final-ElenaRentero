'use strict';

// QUERYSELECTOR

const charactersList = document.querySelector('.js-characters-list');
const searchBtn = document.querySelector('.js-search-btn');
const input = document.querySelector('.js-input');

// VARIABLES GLOBALES -> VARIABLES CON DATOS DE LA APP

let allCharacters = [];

// FUNCIONES

function renderOneCharacter(){
  for (let i = 0; i < allCharacters.length; i++){
    const liElement = document.createElement('li');
    liElement.classList.add('characters');
    const articleElement = document.createElement('article');
    articleElement.classList.add('characters__card');
    const imgElement = document.createElement('img');
    imgElement.classList.add('characters__card--img');
    imgElement.setAttribute('src', `${allCharacters[i].img}`);
    imgElement.setAttribute('alt', `${allCharacters[i].name}`);
    const titleElement = document.createElement('h2');
    titleElement.classList.add('characters__card--name');
    const titleElementContent = document.createTextNode(`${allCharacters[i].name}`);
    titleElement.appendChild(titleElementContent);
    const textElement = document.createElement('p');
    textElement.classList.add('characters__card--text');
    const textElementContent = document.createTextNode(`${allCharacters[i].status}`);
    textElement.appendChild(textElementContent);
    charactersList.appendChild(liElement);
    liElement.appendChild(articleElement);
    articleElement.appendChild(imgElement);
    articleElement.appendChild(titleElement);
    articleElement.appendChild(textElement);
  }
}

function handleClick(event) {
  event.preventDefault();
  const valueInput = input.value.toLowerCase();
}

// EVENTOS

searchBtn.addEventListener('click', handleClick);

// PETICIONES AL SERVIDOR

const SERVER_URL = 'https://www.breakingbadapi.com/api/characters';

fetch(SERVER_URL, {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
})
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderOneCharacter();
  });