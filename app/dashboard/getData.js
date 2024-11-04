export const getUsers = async () => {
  let response = await fetch("http://localhost:5000/api/v1/users");
  let data = await response.json();
  //   console.log(posts.data);
  return data;
};
