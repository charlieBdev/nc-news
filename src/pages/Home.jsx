import { useState } from "react"
import ArticlesList from "../components/ArticlesList"
import SortTopics from "../components/SortOptions"

const Home = (props) => {

    const { topics } = props
    console.log(topics, '<<< topics')
    const [topic, setTopic] = useState('')
    console.log()
    
    return (
        <main>
            <SortTopics />
            <p>{topic}</p>
            <ArticlesList />
        </main>
    )
}

export default Home