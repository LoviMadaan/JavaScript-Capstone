import commentCounter from './commentCounter.js';

// Set the project ID and base link for the API
const endpointLink = 'wvPR2ICUAVsWRaiJfk1B';
const endpointId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

// Define an asynchronous function that fetches comments for a given item index
const getComments = async (index) => {
  // Fetch the comments from the API for the given item index
  const response = await fetch(`${endpointId}${endpointLink}/comments?item_id=item${index}`);
  const arr = await response.json();

  // Check if the array of comments is empty
  const isEmpty = !arr.length;

  // Get the div element to display the comments and clear its contents
  const div = document.getElementById('CommentsDiv');
  div.innerHTML = '';

  // If the array of comments is not empty, create a paragraph element for each comment and append
  if (!isEmpty) {
    arr.forEach(({ username, comment }) => {
      const paragraph = document.createElement('p');
      paragraph.className = 'commentsList';
      paragraph.innerHTML = `${username}: ${comment}`;
      div.appendChild(paragraph);
    });
  }

  // Update the number of comments displayed in the commentSection element
  const commentSection = document.getElementById('comments');
  commentSection.innerHTML = `Comments(${commentCounter()})`;
};

// Export the getCommentsfunction and the endpointLink and endpointId variables for use
export default getComments;
export { endpointLink, endpointId };
