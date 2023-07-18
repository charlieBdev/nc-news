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
                <img className="article-img" src={article_img_url} alt={title} />
                <h4><span className="by-author">By</span> {author}</h4>
                <div className="article-info">
                    <p>Article ID: {article_id}</p>
                    <p>Topic: {topic}</p>
                    <p>Created: {formatDate(created_at)}</p>
                </div>
                <p>{votes} votes</p>
                <button className="like-btn">👍</button>
                <p>{comment_count} comments</p>
            </article>
    )
}

export default ArticleCard