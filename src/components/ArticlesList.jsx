import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getArticles, getArticlesByTopic } from "../utils/api"
import ArticleCard from "./ArticleCard"
import SortOptions from "./SortOptions"

const ArticlesList = () => {

    const { topic } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({ sort_by: 'created_at', order: 'desc'})
    const sortByQuery = searchParams.get("sort_by")
    const orderByQuery = searchParams.get("order")

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', direction)
        setSearchParams({ order: 'desc' })
    }

    const setSortBy = (value) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('sort_by', value)
        setSearchParams(newParams)
    }

    // console.log(searchParams, '<<< searchParams')
    // console.log(sortByQuery, '<<< sortByQuery')
    // console.log(orderByQuery, '<<< orderByQuery')

    useEffect(() => {
        if (topic === undefined) {
            getArticles(sortByQuery, orderByQuery)
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
            })
        } else {
            getArticlesByTopic(topic, sortByQuery, orderByQuery)
            .then((filteredArticles) => {
                setArticles(filteredArticles)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
            })
        }
    }, [topic, sortByQuery, orderByQuery])

    if (isLoading) {
        return <p>Loading...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <>
                <SortOptions setSortOrder={setSortOrder} setSortBy={setSortBy}/>
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
            </>
        )
    }
}

export default ArticlesList