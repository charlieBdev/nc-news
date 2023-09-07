import { Link } from "react-router-dom"
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { formatDate } from "../utils/utils"

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
        <article className="rounded-lg border shadow hover:shadow-lg h-full grid grid-cols-2 gap-1">

            <div className="flex flex-col justify-between">
                <Link to={`/article/${article_id}`}><img className="w-full rounded" src={article_img_url} alt={title} /></Link>
                <p className="p-1">{formatDate(created_at)}</p>
            </div>

            <div className="flex flex-col justify-between">
                <div className="">
                    <Link to={`/article/${article_id}`}><h3 className="font-bold p-1">{title}</h3></Link>
                    <h4 className="p-1"><span className="text-neutral-500 ">By</span> <span className="">{author}</span></h4>
                </div>
                <div className="text-neutral-500 flex space-x-1 justify-end items-center p-1">
                    <p>{votes}</p>
                    <AiOutlineLike />
                    <p>{comment_count}</p>
                    <AiOutlineComment />
                </div>

            </div>

        </article>
    )
}
