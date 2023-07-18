import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"


const SingleArticle = (props) => {

    const {
        title,
        author,
        article_id,
        topic,
        body,
        created_at,
        votes,
        article_img_url,
    } = props.article

    return (
        <article className="single-article-card">
            <h3>{title}</h3>
            <img className="article-img" src={article_img_url} alt={title} />
            <h4><span className="by-author">By</span> {author}</h4>
            <p>{body}</p>
            <div className="article-info">
                <p>Article ID: {article_id}</p>
                <p>Topic: {topic}</p>
                <p>Created: {formatDate(created_at)}</p>
            </div>
            <p>{votes} votes</p>
            <button className="like-btn">👍</button>
            <Link to="/">Back</Link>
        </article>
    )
}

export default SingleArticle