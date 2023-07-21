import { useState } from "react"
import { deleteComment, getCommentsByArticleId } from "../utils/api"
import { formatDate } from "../utils/utils"

const CommentCard = (props) => {
    const {
        author,
        body,
        article_id,
        created_at,
        comment_id
    } = props.comment

    const {
        comments,
        setComments,
        isDeleted,
        setIsDeleted,
        isDeleting,
        setIsDeleting,
    } = props

    const { user } = props

    const handleDelete = (e) => {
        e.preventDefault()
        setIsDeleting(true)
        const promises = [deleteComment(comment_id), getCommentsByArticleId(article_id)]
        return Promise.all(promises).then((res) => {
            setComments(res[1])
            setIsDeleted(true)
            setIsDeleting(false)
        })
        .catch((err) => {
            setIsDeleting(false)
            setIsDeleted(false)
        })
    }

    return (
        <>
            <div className="comment-card">
                <h4>{author} said...</h4>
                <h5 className="comment-body">{body}</h5>
                <p>{formatDate(created_at)}</p>
                {user === author && <button disabled={isDeleting} onClick={handleDelete} className="delete-comment-btn">{!isDeleting ? 'Delete' : 'Deleting'}</button>}
            </div>
        </>
        
    )
}


export default CommentCard