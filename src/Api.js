import axios from "axios"

const marketplaceApi = axios.create({
    baseURL: "https://nc-marketplace-1-xm97.onrender.com/api",
});

export const getItems = () => {
    return marketplaceApi.get("/items").then((res) => {
        return res.data.items;
    })
};

export const getCategories = () => {
    return marketplaceApi.get("/categories").then((res) => {
        return res.data.categories
    })
}
