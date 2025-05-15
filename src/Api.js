import axios from "axios"

const marketplaceApi = axios.create({
    baseURL: "https://nc-marketplace-1-xm97.onrender.com/api",
});

export const getItems = (searchTerm) => {
    return marketplaceApi.get("/items", { params: {category_name: searchTerm.category}}).then((res) => {
        console.log("SEARCH TERMS", searchTerm)
        return res.data.items;
    })
};

export const getCategories = () => {
    return marketplaceApi.get("/categories").then((res) => {
        return res.data.categories
    })
}
