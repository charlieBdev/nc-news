import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getArticles } from "../utils/api"
import { ArticleCard, SortOptions } from "../components"
import { Error } from "../components"

export const ArticlesList = () => {

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
                setIsLoading(false)
                setError(err)
            })
    }, [topic, sortByQuery, orderQuery])

    if (isLoading) {
        return <p>...loading articles...</p>
    } else if (error) {
        return <Error
            errorStatus={error.response.status}
            errorMessage={error.response.data.msg}
        />
    } else {
        return (
            <div className="">
                <SortOptions />
                <div>
                    <p className="text-center p-3 text-neutral-500">{articles.length} articles found</p>
                    <ul className="article-list">
                        {articles.map((article) => {
                            return (
                                <li key={article.article_id} className="article-li">
                                    <ArticleCard article={article} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
