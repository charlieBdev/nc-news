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

export const patchArticleVotes = (article_id, inc) => {
    const patchBody = { inc_votes: inc }
    return api.patch(`/articles/${article_id}`, patchBody)
    .then((res) => {
    })
}

export const getCommentsByArticleId = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(({ data: {comments} }) => {
        return comments
    })
}

export const getTopics = () => {
    return api.get('/topics')
    .then(({ data: { topics }}) => {
        return topics
    })
}

export const getArticlesByTopic = (topic) => {
    return api.get(`/articles/?topic=${topic}`)
    .then(({ data: { articles }}) => {
        return articles
    })
}