import { useState } from "react"
import { deleteComment, getCommentsByArticleId } from "../utils/api"
import { formatDate } from "../utils/utils"
import { RiDeleteBinLine, RiDeleteBinFill } from "react-icons/ri"

export const CommentCard = (props) => {
  const {
    author,
    body,
    article_id,
    created_at,
    comment_id
  } = props.comment

  const {
    comments,
    setComments,
    isDeleted,
    setIsDeleted,
    isDeleting,
    setIsDeleting,
  } = props

  const { user } = props

  const handleDelete = (e) => {
    e.preventDefault()
    setIsDeleting(true)
    const promises = [deleteComment(comment_id), getCommentsByArticleId(article_id)]
    return Promise.all(promises).then((res) => {
      setComments(res[1])
      setIsDeleted(true)
      setIsDeleting(false)
    })
      .catch((err) => {
        setIsDeleting(false)
        setIsDeleted(false)
      })
  }

  return (
    <>
      <div className="shadow rounded p-1 hover:shadow-lg">
        <div className="flex justify-between text-neutral-500">
          <h4>{author}...</h4>
          <p className="text-xs">{formatDate(created_at)}</p>
        </div>

        <h5 className="">{body}</h5>
        <div className="flex justify-end items-center">
          {user === author && (
            <button
              disabled={isDeleting}
              onClick={handleDelete}
              className="w-8 h-8 text-green-500 rounded-full hover:shadow hover:cursor-pointer"
            >
              {!isDeleting ? <RiDeleteBinLine className="mx-auto" /> : <RiDeleteBinFill className="animate-pulse mx-auto" />}
            </button>
          )}
        </div>
      </div>
    </>
  )
}
