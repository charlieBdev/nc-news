import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { getArticles } from "../utils/api"

const ArticlesList = () => {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles()
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <section className="article-list">
                <ul>
                    {articles.map((article) => {
                        return (
                            <li key={article.article_id} className="article-li">
                                <ArticleCard
                                    article_id={article.article_id}
                                    author={article.author}
                                    title={article.title}
                                    topic={article.topic}
                                    created_at={article.created_at}
                                    votes={article.votes}
                                    article_img_url={article.article_img_url}
                                    comment_count={article.comment_count}
                                />
                            </li>
                        )
                    })}
                </ul>
            </section>
    )
    }
}

export default ArticlesList