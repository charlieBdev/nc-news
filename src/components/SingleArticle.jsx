import { useNavigate } from "react-router-dom"
import { formatDate } from "../utils/utils"
import { useState } from "react"
import { patchArticleVotes } from "../utils/api"
import { CommentsList, CommentForm } from "../components"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { TiArrowBackOutline } from "react-icons/ti"


export const SingleArticle = (props) => {

  const navigate = useNavigate()

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

  // const isLiked = localStorage.getItem(`article_${article_id}_liked`) === 'false'

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
          // localStorage.setItem(`article_${article_id}_liked`, 'true')
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
          // localStorage.removeItem(`article_${article_id}_liked`);
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
    <div className="flex flex-col space-y-3 items-center">
      <article className="space-y-3">
        <div className="flex justify-between space-x-1">
          <h3 className="font-bold">{title}</h3>
          <TiArrowBackOutline
            className="w-8 h-8 min-w-8 min-h-8 text-green-500 rounded-full hover:shadow hover:cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        <img className="rounded mx-auto" src={article_img_url} alt={title} />
        <div className="flex justify-between">
          <h4 className=""><span className="text-neutral-500 ">By</span> <span className="">{author}</span></h4>
          <p className="text-neutral-500">{formatDate(created_at)}</p>
        </div>
        <p className="">{body}</p>
        <div className="flex space-x-1 items-center justify-end">
          <p className="text-neutral-500 text-sm">{votes + userVotes}</p>
          <button className="text-green-500 rounded-full hover:shadow hover:cursor-pointer" onClick={handleLike}>{isClicked ? <AiFillLike className="w-8 h-8" /> : <AiOutlineLike className="w-8 h-8" />}</button>
        </div>
      </article >

      <CommentForm user={user} setComments={setComments} />

      <CommentsList user={user} article_id={article_id} comments={comments} setComments={setComments} />
    </div>
  )
}
