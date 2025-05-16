import axios from "axios";

const marketplaceApi = axios.create({
  baseURL: "https://nc-marketplace-1-xm97.onrender.com/api",
});

//https://nc-marketplace-1-xm97.onrender.com/api/items?category_name=electronics
//https://nc-marketplace-1-xm97.onrender.com/api/items?search=bike

export const getItems = (searchTerm) => {
  return marketplaceApi
    .get("/items", {
      params: {
        category_name: searchTerm.category,
        sort_by: searchTerm.sort_by,
        order: searchTerm.order,
        search: searchTerm.search,
      },
    })
    .then((res) => {
      return res.data.items;
    });
};

export const getCategories = () => {
  return marketplaceApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getUsers = () => {
  return marketplaceApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getUserByUsername = (username) => {
  return marketplaceApi.get("/users/" + username).then((res) => {
    return res.data.user
  })
}

export const patchUser = (username, kudos) => {
  return marketplaceApi.patch("/users/" + username, {kudos_inc: kudos}).then((res) => {
    return res.data.user;
  })
}

export const postUser = (username, avatar_url) => {
  console.log({ username: username, avatar_url: avatar_url });
  return marketplaceApi
    .post("/users", { username: username, avatar_url: avatar_url })
    .then((res) => {
      return res.data.user;
    });
};
