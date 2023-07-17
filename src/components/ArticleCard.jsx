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
        <article>
            <h2>{title}</h2>
            <h3><span className="by-author">By</span> {author}</h3>
            <p>Article ID: {article_id}</p>
            {/* inArticle context <p>body</p> */}
            <p>Topic: {topic}</p>
            <p>Created: {formatDate(created_at)}</p>
            <p>{votes} votes</p>
            <img className="article-img" src={article_img_url} alt="{article_img_url}" />
            <p>{comment_count} comments</p>
            <button>👍</button>
        </article>
    )
}

export default ArticleCard