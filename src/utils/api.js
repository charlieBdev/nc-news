import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-qvv1.onrender.com/api" })

export const getArticles = () => {
    return api.get('/articles')
    .then(({ data: {articles}}) => {
        return articles
    })
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({ data: {article}}) => {
        return article
    })
}

export const patchArticleVotes = (article_id, inc) => {
    const patchBody = { inc_votes: inc }
    return api.patch(`/articles/${article_id}`, patchBody)
    .then((res) => {

    })
}