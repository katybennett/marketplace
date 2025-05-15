import axios from "axios";

const marketplaceApi = axios.create({
  baseURL: "https://nc-marketplace-1-xm97.onrender.com/api",
});

//https://nc-marketplace-1-xm97.onrender.com/api/items?category_name=electronics
//https://nc-marketplace-1-xm97.onrender.com/api/items?search=bike

export const getItems = (searchTerm) => {
  return marketplaceApi
    .get("/items", { params: { category_name: searchTerm.category, sort_by: searchTerm.sort_by, order: searchTerm.order, search: searchTerm.search, }, })
    .then((res) => {
      return res.data.items;
    });
};

export const getCategories = () => {
  return marketplaceApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};
