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
    const [isClicked, setIsClicked] = useState(false)

    const handleLike = (event) => {
        event.preventDefault()
        setUserVotes((currVotes) => {
            if (!isClicked) {
                return currVotes + 1
            } else {
                return currVotes - 1
            }
        })
        if (!isClicked) {
            patchArticleVotes(article_id, 1)
            .then(() => {
                setIsClicked(true)
            })
            .catch((err) => {
                setUserVotes((currentUserVotes) => {
                    return currentUserVotes - 1
                })
                setIsClicked(false)
            })
        } else {
            patchArticleVotes(article_id, -1)
            .then(() => {
                setIsClicked(false)
            })
            .catch((err) => {
                setUserVotes((currentUserVotes) => {
                    return currentUserVotes + 1
                })
                setIsClicked(true)
            })
        }
    }

    return (
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
                <button className={!isClicked ? "like-btn" : "liked-btn"} onClick={handleLike}>👍</button>
            <Link to="/">Back</Link>
        </article>
    )
}

export default SingleArticle