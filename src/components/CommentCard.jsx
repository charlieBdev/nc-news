import { useState } from "react";
import { deleteComment, getCommentsByArticleId } from "../utils/api";
import { formatDate } from "../utils/utils";
import { RiDeleteBinLine, RiDeleteBinFill } from "react-icons/ri";

export const CommentCard = (props) => {
  const {
    author,
    body,
    article_id,
    created_at,
    comment_id
  } = props.comment;

  const {
    comments,
    setComments,
    isDeleted,
    setIsDeleted,
    isDeleting,
    setIsDeleting,
    user,
    index,
    backgroundColourClass
  } = props;

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    setIsDeleting(true);
    const promises = [deleteComment(comment_id), getCommentsByArticleId(article_id)];
    Promise.all(promises)
      .then((res) => {
        setComments(res[1]);
        setIsDeleted(true);
        setIsDeleting(false);
      })
      .catch((err) => {
        setIsDeleting(false);
        setIsDeleted(false);
      });
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <div className={`shadow rounded p-1 hover:shadow-lg ${backgroundColourClass}`}>
        <div className="flex justify-between text-neutral-500">
          <h4>{author}...</h4>
          <p className="text-xs">{formatDate(created_at)}</p>
        </div>

        <h5 className="">{body}</h5>
        <div className="flex justify-end items-center">
          {user === author && !showConfirmation && (
            <button
              disabled={isDeleting}
              onClick={handleDelete}
              className="text-green-500 rounded-full hover:shadow hover:cursor-pointer"
            >
              {!isDeleting ? (
                <RiDeleteBinLine className="mx-auto w-6 h-6" />
              ) : (
                <RiDeleteBinFill className="animate-pulse mx-auto w-6 h-6" />
              )}
            </button>
          )}
          {showConfirmation && (
            <div className="flex space-x-2 items-center">
              <span className="text-red-500">Are you sure?</span>
              <button
                onClick={confirmDelete}
                className="px-3 w-12 bg-red-500 text-white rounded-sm"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="px-3 w-12 text-center bg-green-500 text-white rounded-sm"
              >
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
