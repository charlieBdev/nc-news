import { useState } from "react"
import { postComment } from "../utils/api"
import { useParams } from "react-router-dom"

const CommentForm = (props) => {

    const { article_id } = useParams()
    const { user, setComments } = props
    const [newComment, setNewComment] = useState('')
    const [isAdded, setIsAdded] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()

        if (newComment.length <= 50) {
            postComment(article_id, user, newComment)
            .then(() => {
                setIsAdded(true)
            })
            .catch(() => {
                setIsAdded(false)
            })
            setComments((currComments) => {
                const date = new Date(Date.now())
                const toAdd = {
                    article_id,
                    author: user,
                    body: newComment,
                    created_at: date,
                    votes: 0,
                }
                return [toAdd, ...currComments]
            })
            setNewComment('')
        } else {
            setIsError(true)
        }
    }

    return (
        <form onSubmit={handleSumbit}>
            <textarea rows="3" cols="25" type="text" placeholder="Add comment" value={newComment} onChange={(event) => setNewComment(event.target.value)}/>
            {isError ? (<p>Your message is too long!</p>) : (<p>{50 - newComment.length} chars left</p>)}
            <button disabled={newComment.length > 50} type="submit" value="submit">Comment</button>
            {isAdded && <p>Comment added!</p>}
        </form>
    )
}

export default CommentForm