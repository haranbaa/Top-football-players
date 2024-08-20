import { footballerCollection } from './collection.js';

// Function to create a card element
function createCard(footballer) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Add specific class if provided
  if (footballer.cssClass) {
    card.classList.add(footballer.cssClass);
  }

  const img = document.createElement('img');
  img.src = footballer.picture;
  img.alt = footballer.name;
  card.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const cardGenre = document.createElement('div');
  cardGenre.classList.add('card-genre');
  cardGenre.textContent = footballer.club;
  cardContent.appendChild(cardGenre);

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = footballer.name;
  cardContent.appendChild(cardTitle);

  const cardSubtitle = document.createElement('p');
  cardSubtitle.classList.add('card-subtitle');
  cardSubtitle.textContent = footballer.position;
  cardContent.appendChild(cardSubtitle);

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.textContent = footballer.description;
  cardContent.appendChild(cardDescription);

  const hr = document.createElement('hr');
  cardContent.appendChild(hr);

  const externalLinks = document.createElement('div');
  externalLinks.classList.add('external-links');

  const twitterLink = document.createElement('a');
  twitterLink.href = footballer.twitter;
  twitterLink.target = '_blank';
  const twitterIcon = document.createElement('img');
  twitterIcon.src = 'assets/twitter.png';
  twitterIcon.alt = 'Twitter';
  twitterIcon.classList.add('social-icon');
  twitterLink.appendChild(twitterIcon);

  const instagramLink = document.createElement('a');
  instagramLink.href = footballer.instagram;
  instagramLink.target = '_blank';
  const instagramIcon = document.createElement('img');
  instagramIcon.src = 'assets/insta.png';
  instagramIcon.alt = 'Instagram';
  instagramIcon.classList.add('social-icon');
  instagramLink.appendChild(instagramIcon);

  externalLinks.appendChild(twitterLink);
  externalLinks.appendChild(instagramLink);

  cardContent.appendChild(externalLinks);

  card.appendChild(cardContent);

  return card;
}

// Function to populate the collection grid
function populateCollectionGrid(collection) {
  const collectionGrid = document.querySelector('.collection-grid');
  collectionGrid.innerHTML = ''; // Clear the grid before populating
  collection.forEach(footballer => {
    const card = createCard(footballer);
    collectionGrid.appendChild(card);
  });
}

// Function to filter the collection based on search input
function filterCollection(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredCollection = footballerCollection.filter(footballer =>
    footballer.name.toLowerCase().includes(searchTerm)
  );
  populateCollectionGrid(filteredCollection);
}

// Initialize the grid when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  populateCollectionGrid(footballerCollection);

  // Add event listener for search bar
  const searchInput = document.querySelector('#search-bar');
  searchInput.addEventListener('input', filterCollection);
});
