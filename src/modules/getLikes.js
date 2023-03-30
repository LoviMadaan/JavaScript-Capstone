const getLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eX8RQobbgVJKr0OGU90I/likes/')
  .then((response) => response.json());

export default getLikes;
