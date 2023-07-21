import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-qvv1.onrender.com/api" })

// export const getArticles = () => {
//     return api.get(`/articles`)
//     .then(({ data: {articles} }) => {
//         return articles
//     })
// }

export const getArticles = (topic, sort_by, order) => {
    return api.get(`/articles`, { params: { topic, sort_by, order } })
    .then(({ data: { articles }}) => {
        return articles
    })
}

// export const getArticlesByTopic = (topic) => {
//     return api.get(`/articles?topic=${topic}`)
//     .then(({ data: { articles }}) => {
//         return articles
//     })
// }

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


export const postComment = (article_id, username, body) => {
    const toPost = {
        username,
        body    
    }
    return api.post(`/articles/${article_id}/comments`, toPost)
    .then(({ data: {commentAdded} }) => {
        return commentAdded
    })
}