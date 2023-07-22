import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../utils/api"
import SingleArticle from "../components/SingleArticle"


const ArticlePage = (props) => {

    const { user } = props

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
        return <p>...loading article {article_id}...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <SingleArticle article={article} user={user}/>
        )
    }
}

export default ArticlePage