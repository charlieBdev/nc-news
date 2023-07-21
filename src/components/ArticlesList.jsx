import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"
import SortOptions from "./SortOptions"

const ArticlesList = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const topicQuery = searchParams.get("topic")
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    

    // const setSortBy = (sort_by) => {
    //     const newParams = new URLSearchParams(searchParams)
    //     newParams.set('sort_by', sort_by)
    //     setSearchParams(newParams)
    // }

    // const setOrder = (order) => {
    //     const newParams = new URLSearchParams(searchParams)
    //     newParams.set('order', order)
    //     setSearchParams(newParams)
    // }

    useEffect(() => {
        getArticles(topicQuery, sortByQuery, orderQuery)
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
        })
    }, [topicQuery, sortByQuery, orderQuery])

    if (isLoading) {
        return <p>Loading...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <>
                {/* <Navbar setTopic={setTopic}/> */}
                <SortOptions />
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