import popup from './popup.js';
import addLike from './addLike.js';
import getLikes from './getLikes.js';
import menuCounter from './menuCounter.js';


// Asynchronous function to fetch and display food items
const getFoods = async () => {
  // Fetching data from API
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = (await response.json()).meals;

  // Selecting required DOM elements
  const displayCard = document.querySelector('.displayCard');
  const counterText = document.querySelector('.menuCounter');

  // Looping through the data and creating HTML elements dynamically
  data.forEach(async (meal, i) => {
    const node = document.createElement('div');
    node.className = 'food';
    node.innerHTML = `
      <img class="food-image" src=${meal.strMealThumb} alt="a picture of a food" />
      <small class="title">${meal.strMeal}</small>
      <div class="detail-container">
        <button type="button" class="comments">Comments</button>
        <small class="likes"><span class="numberOfLikes"> </span> <i class="fa-regular fa-heart heart"></i></small>
      </div>
    `;
    displayCard.appendChild(node);

    // Selecting required child elements of the article node
    const numberOfLikes = node.querySelector('.numberOfLikes');
    const buttonComments = node.querySelector('.comments');
    const likes = node.querySelector('.heart');

    // Updating likes count of each food item
    const updateLikes = async () => {
      const data2 = await getLikes();
      const num = data2.find((json) => json.item_id === meal.idMeal);
      numberOfLikes.innerHTML = num !== undefined ? `${num.likes}` : '0';
      return num.likes;
    };

    // Adding event listeners for comments and likes
    buttonComments.addEventListener('click', () => popup(i));
    likes.addEventListener('click', async (event) => {
      if (event.target.classList.contains('fa-regular')) {
        likes.classList.remove('fa-regular');
        likes.classList.add('fa-solid');
        await addLike(i);
        numberOfLikes.innerHTML = `${await updateLikes()}`;
      } else {
        likes.classList.add('fa-regular');
        likes.classList.remove('fa-solid');
      }
    });
    numberOfLikes.innerHTML = await updateLikes();
  });

  // Updating the food counter text
  counterText.innerHTML = `(${menuCounter()})`;

};

  export default getFoods;