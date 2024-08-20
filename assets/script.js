// script.js
import { collection } from './collection.js';

function renderCollection() {
  const container = document.getElementById('collection-container');
  container.innerHTML = ''; // Clear previous content

  collection.forEach(player => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
      <img src="${player.picture}" alt="${player.name}">
      <div class="card-content">
        <div class="card-genre">${player.currentClub}</div>
        <h2 class="card-title">${player.name}</h2>
        <p class="card-subtitle">${player.position} - ${player.nationality}</p>
        <p class="card-description">${player.description}</p>
      </div>
    `;
    
    container.appendChild(card);
  });
}

renderCollection();
