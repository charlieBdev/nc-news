import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-qvv1.onrender.com/api" })

export const getArticles = () => {
    return api.get('/articles')
    .then(({ data: {articles}}) => {
        return articles
    })
} 