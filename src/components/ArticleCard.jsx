import { formatDate } from "../utils/utils"

const ArticleCard = (props) => {
    const {
        author,
        title,
        article_id,
        body,
        topic,
        created_at,
        votes,
        article_img_url,
        comment_count
    } = props

    return (
        <article className="article-card">
            <h3>{title}</h3>
            <h4><span className="by-author">By</span> {author}</h4>
            <p>Article ID: {article_id}</p>
            {/* inArticle context <p>body</p> */}
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