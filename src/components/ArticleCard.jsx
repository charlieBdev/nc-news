import { Link } from "react-router-dom"
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { formatDate, getTopicIcon, limitTextLength } from "../utils/utils"

export const ArticleCard = (props) => {
  const {
    author,
    title,
    article_id,
    created_at,
    votes,
    article_img_url,
    comment_count,
    topic
  } = props.article

  return (
    <article className="rounded-lg shadow hover:shadow-lg h-full grid grid-cols-2 gap-2">

      <div className="flex flex-col justify-between">
        <Link to={`/article/${article_id}`}><img className="w-full rounded hover:shadow-lg" src={article_img_url} alt={title} /></Link>
        <p className="text-neutral-500 p-1">{formatDate(created_at)}</p>
      </div>

      <div className="flex flex-col justify-between">
        <div className="">
          <Link to={`/article/${article_id}`}><h3 className="font-bold hover:text-green-500">{limitTextLength(title, 50)}</h3></Link>
          <div className="flex space-x-1 items-center">
            <p className="text-green-500">{getTopicIcon(topic)}</p>
            <h4 className=""><span className="text-neutral-500">By</span> <span className="">{author}</span></h4>
          </div>
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
