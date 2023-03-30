import menuCounter from '../modules/menuCounter.js';

test('menuCounter returns the correct count of food items', () => {
  // Arrange
  document.body.innerHTML = `
      <div>
        <div class="food"></div>
        <div class="food"></div>
        <div class="drink"></div>
      </div>
    `;

  // Act
  const count = menuCounter();

  // Assert
  expect(count).toBe(2);
});