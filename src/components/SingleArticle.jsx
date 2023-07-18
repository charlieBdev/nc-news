import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"
import CommentsList from "./CommentsList"


const SingleArticle = (props) => {

    const {
        article_id,
        title,
        author,
        topic,
        body,
        created_at,
        votes,
        article_img_url,
    } = props.article

    return (
        <>
            <article className="single-article-card">
                <h3>{title}</h3>
                <img className="article-img" src={article_img_url} alt={title} />
                <p className="article-body">{body}</p>
                <h4><span className="by-author">By</span> {author}</h4>
                <div className="article-info">
                    <p>Topic: {topic}</p>
                    <p>Created: {formatDate(created_at)}</p>
                </div>
                <p>{votes} votes</p>
                <button className="like-btn">👍</button>
                <Link to="/">Back</Link>
            </article>
            <CommentsList article_id={article_id}/>
        </>
    )
}

export default SingleArticle