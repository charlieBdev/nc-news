import { CommentCard } from "../components"
import { getCommentsByArticleId } from "../utils/api"
import { useEffect, useState } from "react"
import { Error } from "../components"

export const CommentsList = (props) => {

    const { article_id, comments, setComments, user } = props
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isDeleted, setIsDeleted] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }, [comments])

    if (isLoading) {
        return <p>...loading...</p>
    } else if (error) {
        return <Error
            errorStatus={error.response.status}
            errorMessage={error.response.data.msg}
        />
    } else {
        return (
            <section className="">
                {!isDeleted && <p>Cannot delete. Please try again...</p>}
                <ul className="flex flex-col space-y-2">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id} className="comment-li">
                                <CommentCard
                                    user={user}
                                    comment={comment}
                                    comments={comments}
                                    setComments={setComments}
                                    isDeleted={isDeleted}
                                    setIsDeleted={setIsDeleted}
                                    isDeleting={isDeleting}
                                    setIsDeleting={setIsDeleting}
                                />
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}
