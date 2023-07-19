import { useState } from "react"
import { postComment } from "../utils/api"
import { useParams } from "react-router-dom"

const CommentForm = (props) => {

    const { article_id } = useParams()
    const { user, setComments } = props
    const [newComment, setNewComment] = useState('')
    const [isAdded, setIsAdded] = useState(false)
    const handleSumbit = (event) => {
        event.preventDefault()
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
    }

    return (
        <form onSubmit={handleSumbit}>
            <input type="textarea" placeholder="Add comment" value={newComment} onChange={(event) => setNewComment(event.target.value)}/>
            <button type="submit" value="submit">Add Comment</button>
            {isAdded && <p>Comment Added!</p>}
        </form>
    )
}

export default CommentForm