import { useState } from "react"
import { postComment } from "../utils/api"
import { useParams } from "react-router-dom"

const CommentForm = (props) => {

    const { article_id } = useParams()
    const { user, setComments } = props
    const [newComment, setNewComment] = useState('')
    const [apiError, setApiError] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        if (newComment.length <= 50) {
            postComment(article_id, user, newComment)
            .then((res) => {
                setComments((currComments) => {
                    return [res, ...currComments]
            })
            setNewComment('')
            setApiError(false)
            })
            .catch(() => {
                setApiError(true)
            })
        }
    }

    return (
        <form onSubmit={handleSumbit}>
            <textarea rows="3" cols="25" type="text" placeholder="Add comment" value={newComment} onChange={(event) => setNewComment(event.target.value)}/>
            <p>{50 - newComment.length} chars left</p>
            <button disabled={newComment.length > 50 || newComment.length < 1} type="submit" value="submit">Comment</button>
            {apiError && <p>Sorry, that did not work. Please try again.</p>}
        </form>
    )
}

export default CommentForm