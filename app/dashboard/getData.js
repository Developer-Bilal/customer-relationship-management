export const getUsers = async () => {
  let response = await fetch("http://localhost:5000/api/v1/users");
  let data = await response.json();
  //   console.log(posts.data);
  return data;
};

export const getClients = async () => {
  let response = await fetch("http://localhost:5000/api/v1/clients");
  let data = await response.json();
  return data;
};

export const getDevelopers = async () => {
  let response = await fetch("http://localhost:5000/api/v1/developers");
  let data = await response.json();
  return data;
};

export const getProjects = async () => {
  let response = await fetch("http://localhost:5000/api/v1/projects");
  let data = await response.json();
  return data;
};
