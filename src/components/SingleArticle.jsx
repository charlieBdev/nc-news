import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"
import { useState } from "react"
import { patchArticleVotes } from "../utils/api"
import CommentsList from "./CommentsList"
import CommentForm from "./CommentForm"


const SingleArticle = (props) => {
    
    const { user } = props
    
    const {
        article_id,
        title,
        author,
        body,
        created_at,
        votes,
        article_img_url,
    } = props.article

    const [userVotes, setUserVotes] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const [comments, setComments] = useState([])

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
        <>
            <article className="single-article-card">
            <h3>{title}</h3>
            <img className="article-img" src={article_img_url} alt={title} />
            <h4><span className="by-author">By</span> {author}</h4>
            <p className="article-body">{body}</p>
            <p>Created: {formatDate(created_at)}</p>
            <p>{votes + userVotes} votes</p>
            <button className={!isClicked ? "like-btn" : "liked-btn"} onClick={handleLike}>💖</button>
            <Link to="/">Back</Link>
        </article>
        <section>
            <CommentForm user={user} setComments={setComments}/>
        </section>
        <section>
            <CommentsList article_id={article_id} comments={comments} setComments={setComments}/>
        </section>
        </>
    )
}

export default SingleArticle