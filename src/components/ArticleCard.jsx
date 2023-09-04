import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"


const ArticleCard = (props) => {
    const {
        author,
        title,
        article_id,
        created_at,
        votes,
        article_img_url,
        comment_count
    } = props.article

    return (
        <article className="article-card">
            <Link to={`/article/${article_id}`}><img className="article-img" src={article_img_url} alt={title} /></Link>
            <Link to={`/article/${article_id}`}><h3>{title}</h3></Link>
            <h4><span className="by-author">By</span> {author}</h4>
            <p>Created: {formatDate(created_at)}</p>
            <div className="vote-and-comment-info">
                <p>{votes} votes</p>
                <p>{comment_count} comments</p>
            </div>
        </article>
    )
}

export default ArticleCard