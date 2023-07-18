import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../utils/api"
import SingleArticle from "../components/SingleArticle"


const ArticlePage = () => {

    const { article_id } = useParams()
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getArticleById(article_id)
        .then((articleFromApi) => {
            setArticle(articleFromApi)
            setIsLoading(false)
        })
        .catch(() => {
            setIsError(true)
        })
    }, [article_id])

    if (isLoading) {
        return <p>...loading...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <SingleArticle article={article}/>
        )
    }
}

export default ArticlePage