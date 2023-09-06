import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"

export const ArticleCard = (props) => {
    const {
        author,
        title,
        article_id,
        created_at,
        votes,
        article_img_url,
        comment_count
    } = props.article

    return (
        <article className="rounded-lg border shadow hover:shadow-lg h-full flex flex-col justify-between">
            <div className="">
                <Link to={`/article/${article_id}`}><img className="w-full rounded" src={article_img_url} alt={title} /></Link>
                <Link to={`/article/${article_id}`}><h3 className="font-bold p-3">{title}</h3></Link>
                <h4 className="p-3">By <span className="font-bold">{author}</span></h4>
            </div>
            <div className="text-neutral-500 flex justify-between p-3">
                <p>{formatDate(created_at)}</p>
                <div className="flex space-x-1 justify-end items-center">
                    <p>{votes}</p>
                    <AiOutlineLike />
                    <p>{comment_count}</p>
                    <AiOutlineComment />
                </div>
            </div>
        </article>
    )
}
