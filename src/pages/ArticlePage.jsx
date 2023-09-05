import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../utils/api"
import { Error, SingleArticle } from "../components"


export const ArticlePage = (props) => {

    const { user } = props

    const { article_id } = useParams()
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getArticleById(article_id)
            .then((articleFromApi) => {
                setArticle(articleFromApi)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }, [article_id])

    if (isLoading) {
        return <p>...loading article {article_id}...</p>
    } else if (error) {
        return <Error
            errorStatus={error.response.status}
            errorMessage={error.response.data.msg}
        />
    } else {
        return (
            <SingleArticle article={article} user={user} />
        )
    }
}
