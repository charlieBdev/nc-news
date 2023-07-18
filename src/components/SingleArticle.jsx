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
        <article className="article-card">
            <h3>{title}</h3>
            <h4><span className="by-author">By</span> {author}</h4>
            <p>{body}</p>
            <p>Article ID: {article_id}</p>
            <p>Topic: {topic}</p>
            <p>Created: {formatDate(created_at)}</p>
            <p>{votes} votes</p>
            <img className="article-img" src={article_img_url} alt={title} />
            <button className="like-btn">👍</button>
        </article>
    )
}

export default SingleArticle