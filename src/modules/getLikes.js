const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eX8RQobbgVJKr0OGU90I/likes/');
  return response.json();
};

export default getLikes;
