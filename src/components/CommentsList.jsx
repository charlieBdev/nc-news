import CommentCard from "./CommentCard"
import { getCommentsByArticleId } from "../utils/api"
import { useEffect, useState } from "react"

const CommentsList = (props) => {
    
    const { article_id, comments, setComments, user } = props
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isDeleted, setIsDeleted] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getCommentsByArticleId(article_id)
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
        })
    }, [comments])

    if (isLoading) {
        return <p>...loading...</p>
    } else if (isError) {
        return <p>Error!</p>
    } else {
        return (
            <section className="comment-list">
                {!isDeleted && <p>Cannot delete. Please try again...</p>}
                <ul>
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

export default CommentsList