import { CommentCard } from "../components"
import { getCommentsByArticleId } from "../utils/api"
import { useEffect, useState } from "react"
import { Error } from "../components"
import CommentCardSkeleton from "./skeletons/CommentCardSkeleton"

export const CommentsList = (props) => {

    const { article_id, comments, setComments, user } = props
    const [isLoadingComments, setIsLoadingComments] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isDeleted, setIsDeleted] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi)
                setIsLoadingComments(false)
            })
            .catch((err) => {
                setIsLoadingComments(false)
                setError(err)
            })
    }, [comments])

    if (isLoadingComments) {
        return (
            <section className="">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="bg-neutral-300 animate-pulse rounded p-1">
                        <CommentCardSkeleton />
                    </div>
                ))}
            </section>
        )
    } else if (error) {
        return <Error
            errorStatus={error.response.status}
            errorMessage={error.response.data.msg}
        />
    } else {
        return (
            <section className="">
                {!isDeleted && <p>Cannot delete. Please try again...</p>}
                <ul className="flex flex-col space-y-2">
                    {comments.map((comment, index) => {
                        return (
                            <li key={comment.comment_id} className="">
                                <CommentCard
                                    user={user}
                                    comment={comment}
                                    comments={comments}
                                    setComments={setComments}
                                    isDeleted={isDeleted}
                                    setIsDeleted={setIsDeleted}
                                    isDeleting={isDeleting}
                                    setIsDeleting={setIsDeleting}
                                    backgroundColourClass={index % 2 === 0 ? 'bg-white' : 'bg-neutral-100'}
                                />
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}
