import { formatDate } from "../utils/utils"

const CommentCard = (props) => {
    const {
        author,
        body,
        votes,
        created_at
    } = props.comment

    return (
        <div className="comment-card">
            <p>{author}</p>
            <p className="comment-body">{body}</p>
            <p>{formatDate(created_at)}</p>
            <p>{votes}</p>
            <div className="comment-btns">
                <button className="like-btn">👍</button>
                <button>Delete</button>
            </div>
        </div>
    )
}


export default CommentCard