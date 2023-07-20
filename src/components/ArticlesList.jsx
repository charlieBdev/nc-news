import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { getArticles, getArticlesByTopic } from "../utils/api"
import { useParams } from "react-router-dom"

const ArticlesList = () => {

    const { topic } = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (topic === undefined) {
            getArticles()
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
            })
        } else {
            getArticlesByTopic(topic)
            .then((filteredArticles) => {
                setArticles(filteredArticles)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
            })
        }
    }, [topic])

    if (isLoading) {
        return <p>Loading...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <section className="article-list">
                <ul>
                    {articles.map((article) => {
                        return (
                            <li key={article.article_id} className="article-li">
                                <ArticleCard article={article}/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default ArticlesList