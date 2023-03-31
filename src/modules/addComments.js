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
    throw new Error('Failed to add like');
  }
};

export default addComment;
