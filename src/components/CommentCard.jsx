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
            <h4>{author} said...</h4>
            <h5 className="comment-body">{body}</h5>
            <p>{formatDate(created_at)}</p>
            <p>{votes}</p>
            <div className="comment-btns">
                <button className="like-btn">💖</button>
                <button>Delete</button>
            </div>
        </div>
    )
}


export default CommentCard