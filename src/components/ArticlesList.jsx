import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"
import SortOptions from "./SortOptions"
import Navbar from "./Navbar"

const ArticlesList = () => {

    // const { topic } = useParams()
    // console.log(topic, '<<< topic')
    const [searchParams, setSearchParams] = useSearchParams()
    const topicQuery = searchParams.get("topic")
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const setTopic = (topic) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', topic)
        setSearchParams(newParams)
    }

    const setSortBy = (sort_by) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('sort_by', sort_by)
        setSearchParams(newParams)
    }

    const setOrder = (order) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', order)
        setSearchParams(newParams)
    }

    useEffect(() => {
        getArticles(topicQuery, sortByQuery, orderQuery)
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
        })
        // if (!topicQuery) {
        //     getArticles()
        //     .then((articles) => {
        //         setArticles(articles)
        //         setIsLoading(false)
        //     })
        //     .catch(() => {
        //         setIsError(true)
        //     })
        // } else if (topicQuery) {
        //     getArticlesByTopic(topicQuery)
        //     .then((articles) => {
        //         setArticles(articles)
        //         setIsLoading(false)
        //     })
        //     .catch(() => {
        //         setIsError(true)
        //     })
        // } else {
        //     getArticlesByTopic(topicQuery, sortByQuery, orderQuery)
        //     .then((filteredArticles) => {
        //         setArticles(filteredArticles)
        //         setIsLoading(false)
        //     })
        //     .catch(() => {
        //         setIsError(true)
        //     })
        // }
    }, [topicQuery, sortByQuery, orderQuery])

    if (isLoading) {
        return <p>Loading...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <>
                <Navbar setTopic={setTopic}/>
                <SortOptions setOrder={setOrder} setSortBy={setSortBy}/>
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