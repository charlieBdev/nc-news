import CommentCard from "./CommentCard"
import { getCommentsByArticleId } from "../utils/api"
import { useEffect, useState } from "react"

const CommentsList = (props) => {

    const { article_id } = props
    
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCommentsByArticleId(article_id)
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>...loading...</p>
    } else {
        return (
            <section className="comment-list">
                <ul>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id} className="comment-li">
                                <CommentCard comment={comment}/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default CommentsList