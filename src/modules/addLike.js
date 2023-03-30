const addLike = async (mealIndex) => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const result = await response.json();
    const data = result.meals;
    const id = data[mealIndex].idMeal;

    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eX8RQobbgVJKr0OGU90I/likes/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add like');
  }
};

export default addLike;
