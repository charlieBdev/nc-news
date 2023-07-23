import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../utils/api"
import SingleArticle from "../components/SingleArticle"
import Error from "../components/Error"


const ArticlePage = (props) => {

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
            setError(err)
        })
    }, [article_id])

    if (error) {
        return <Error
            errorStatus={error.response.status}
            errorMessage={error.response.data.msg}
        />
    } else if (isLoading) {
        return <p>...loading article {article_id}...</p>
    } else {
        return (
            <SingleArticle article={article} user={user}/>
        )
    }
}

export default ArticlePage