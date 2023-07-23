import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"
import SortOptions from "./SortOptions"
import Error from "./Error"

const ArticlesList = () => {

    const { topic } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getArticles(topic, sortByQuery, orderQuery)
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setError({err})
        })
    }, [topic, sortByQuery, orderQuery])

    if (error) {
        return <Error error={error}/>
    } else if (isLoading) {
        return <p>...loading articles...</p>
    } else {
        return (
            <>
                <SortOptions />
                <section>
                <p className="articles-found">{articles.length} articles found</p>
                    <ul className="article-list">
                        {articles.map((article) => {
                            return (
                                <li key={article.article_id} className="article-li">
                                    <ArticleCard article={article}/>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default ArticlesList