import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"
import { useState } from "react"
import { patchArticleVotes } from "../utils/api"
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

    const [userVotes, setUserVotes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = (event) => {
        event.preventDefault()
        setUserVotes((currVotes) => {
            if (!isLiked) {
                return currVotes + 1
            } else {
                return currVotes - 1
            }
            
        })
        if (!isLiked) {
            setIsLiked(true)
            patchArticleVotes(article_id, 1)
            .catch(() => {
                setUserVotes(0)
                setIsLiked(false)
            })
        } else {
            setIsLiked(false)
            patchArticleVotes(article_id, -1)
            .catch(() => {
                setUserVotes(1)
                setIsLiked(true)
            })
        }
    }

    return (
        <>
            <article className="single-article-card">
                <h3>{title}</h3>
                <img className="article-img" src={article_img_url} alt={title} />
                <h4><span className="by-author">By</span> {author}</h4>
                <p className="article-body">{body}</p>
                <div className="article-info">
                    <p>Article ID: {article_id}</p>
                    <p>Topic: {topic}</p>
                    <p>Created: {formatDate(created_at)}</p>
                </div>
                <p>{votes + userVotes} votes</p>
                    <button className={!isLiked ? "like-btn" : "liked-btn"} onClick={handleLike}>👍</button>
                <Link to="/">Back</Link>
            </article>
            <CommentsList article_id={article_id}/>
        </>
    )
}

export default SingleArticle