import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"

const ArticleCard = (props) => {
    const {
        author,
        title,
        article_id,
        topic,
        created_at,
        votes,
        article_img_url,
        comment_count
    } = props.article

    return (
        <article className="article-card">
                <Link to={`/articles/${article_id}`}><h3>{title}</h3></Link>
                <h4><span className="by-author">By</span> {author}</h4>
                <p>Article ID: {article_id}</p>
                <p>Topic: {topic}</p>
                <p>Created: {formatDate(created_at)}</p>
                <p>{votes} votes</p>
                <img className="article-img" src={article_img_url} alt={title} />
                <p>{comment_count} comments</p>
                <button className="like-btn">👍</button>
            </article>
    )
}

export default ArticleCard