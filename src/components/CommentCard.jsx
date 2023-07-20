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
        </div>
    )
}


export default CommentCard