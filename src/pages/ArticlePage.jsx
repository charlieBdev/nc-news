import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../utils/api"
import { Error, SingleArticle } from "../components"
import { CommentsList, CommentForm } from "../components"

export const ArticlePage = (props) => {

    const { user } = props

    const { article_id } = useParams()
    const [article, setArticle] = useState([])
    const [isLoadingArticle, setIsLoadingArticle] = useState(true)
    const [error, setError] = useState(null)
		const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleById(article_id)
            .then((articleFromApi) => {
                setArticle(articleFromApi)
                setIsLoadingArticle(false)
            })
            .catch((err) => {
                setIsLoadingArticle(false)
                setError(err)
            })
    }, [article_id])

    if (error) {
        return <Error
            errorStatus={error.response.status}
            errorMessage={error.response.data.msg}
        />
    } else {
        return (
            <div className="flex flex-col space-y-3 items-center lg:items-start lg:flex-row gap-2">
              <SingleArticle article={article} user={user} isLoadingArticle={isLoadingArticle}/>
							
							<div className="lg:w-1/4 lg:h-screen lg:overflow-y-auto">
								{!isLoadingArticle && (
									<div className=" bg-white">
										<CommentForm
											user={user}
											setComments={setComments} 
										/>
									</div>
								)}
								
								<div className="">
									<CommentsList
										user={user}
										article_id={article_id}
										comments={comments}
										setComments={setComments}
									/>
								</div>

							</div>
            </div>
        )
    }
}
