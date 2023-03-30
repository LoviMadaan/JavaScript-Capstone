import getComments, { endpointLink, endpointId } from './getComments.js';

const addComment = async (itemId, username, comment) => {
  try {
    await fetch(`${endpointId}${endpointLink}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `item${itemId}`,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await getComments(itemId);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

export default addComment;
// const addComment = async (index, name, comment) => {
//   await fetch(`${endpointId}${endpointLink}/comments`, {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: `item${index}`,
//       username: name,
//       comment,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   await getComments(index);
// };