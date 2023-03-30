import commentCounter from '../modules/commentCounter.js';

test('commentCounter returns the correct count of comments', () => {
  // Arrange
  document.body.innerHTML = `
      <div>
        <ul class="commentsList">
          <li>Comment 1</li>
          <li>Comment 2</li>
        </ul>
        <div class="commentsList">
          <p>Comment 3</p>
        </div>
        <div class="notCommentsList">
          <p>Not a comment</p>
        </div>
      </div>
    `;

  // Act
  const count = commentCounter();

  // Assert
  expect(count).toBe(2);
});
