import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-qvv1.onrender.com/api" })

export const getArticles = () => {
    return api.get('/articles')
    .then(({ data: {articles} }) => {
        return articles
    })
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({ data: {article} }) => {
        return article
    })
}

export const getCommentsByArticleId = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(({ data: {comments} }) => {
        return comments
    })
}