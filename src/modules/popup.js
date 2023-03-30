import addComment from './addComments.js';
import getComments from './getComments.js';

const popSection = document.getElementById('popSection');

const popUp = async (index) => {
  // Fetch data from the API
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const json = await data.json();
  const { meals } = json;
  const mealData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals[index].idMeal}`);
  const jsonMeal = await mealData.json();
  const specificMeal = jsonMeal.meals[0];

  // Create the popup container
  const section = document.createElement('section');
  section.className = 'popUp';
  popSection.appendChild(section);
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popupContainer';
  section.appendChild(popupContainer);
  // Create the close button
  const closeBtn = document.createElement('button');
  closeBtn.id = 'buttonX';
  closeBtn.className = 'closeBtn';
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  popupContainer.appendChild(closeBtn);

  // Create the image and title
  popupContainer.innerHTML += `
    <img src="${meals[index].strMealThumb}">
    <h3>${meals[index].strMeal}</h3>
  `;

  // Create the paragraphs for area and category
  const divPara = document.createElement('div');
  divPara.className = 'divPara';
  divPara.innerHTML += `
    <p><strong>Area:</strong> ${specificMeal.strArea}</p>
    <p><strong>Category:</strong> ${specificMeal.strCategory}</p>
  `;
  popupContainer.appendChild(divPara);

  // Create the comments section
  const div1 = document.createElement('div');
  div1.className = 'commentsContainer';
  div1.innerHTML += `
    <h4 id="comments">Comments(0)</h4>
    <div id="CommentsDiv" class="CommentsDiv"></div>
  `;
  popupContainer.appendChild(div1);

  // Create the form for adding comments
  const addCommentHeader = document.createElement('h4');
  addCommentHeader.innerHTML = 'Add Comments';
  const form = document.createElement('form');
  form.innerHTML = '<input type="text" name="name" id="username" placeholder="Username"><textarea name="comment" id="textComment" placeholder="Add Comments" cols="30" rows="5"></textarea><button id="submit" type="submit">Comment</button>';
  popupContainer.appendChild(addCommentHeader);
  popupContainer.appendChild(form);

  // Add event listener to close button and cardExternalArea
  const closeBtn2 = document.querySelector('.closeBtn');
  // const cardExternalArea = document.querySelector('.popUp');
  closeBtn2.addEventListener('click', () => {
    popSection.innerHTML = '';
  });
  // cardExternalArea.addEventListener('click', () => {
  //   popSection.innerHTML = '';
  // });
  const submit = document.getElementById('submit');
  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const usercomment = document.getElementById('textComment').value;
    if (username && usercomment) {
      document.getElementById('username').value = '';
      document.getElementById('textComment').value = '';
      addComment(index, username, usercomment);
    } else {
      const error = document.createElement('p');
      error.className = 'error';
      error.innerHTML = 'Please fill all the requirements';
      setTimeout(() => error.remove(), 3000);
      form.appendChild(error);
      document.getElementById('textComment').insertAdjacentElement('afterend', error);
    }
  });
  await getComments(index);
};

export default popUp;