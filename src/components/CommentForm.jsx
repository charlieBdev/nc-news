import { useState } from "react"
import { postComment } from "../utils/api"
import { useParams } from "react-router-dom"

export const CommentForm = (props) => {

    const { article_id } = useParams()
    const { user, setComments } = props
    const [newComment, setNewComment] = useState('')
    const [apiError, setApiError] = useState(false)
    const [btnIsDisabled, setBtnIsDisabled] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        if (newComment.length > 0 && newComment.length <= 200) {
            setBtnIsDisabled(true)
            postComment(article_id, user, newComment)
                .then((res) => {
                    setBtnIsDisabled(false)
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
            <textarea rows="3" cols="25" type="text" placeholder="Add comment" value={newComment} onChange={(event) => setNewComment(event.target.value)} />
            <p className={newComment.length > 200 ? "comment-length-not-ok" : "comment-length-ok"}>{200 - newComment.length} chars left</p>
            <button className="comment-btn" disabled={btnIsDisabled} type="submit" value="submit">Comment</button>
            {apiError && <p>Sorry, that did not work. Please try again.</p>}
        </form>
    )
}
