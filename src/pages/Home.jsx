import { useState } from "react"
import ArticlesList from "../components/ArticlesList"
import SortTopics from "../components/SortOptions"

const Home = () => {

    const [topic, setTopic] = useState('')
    
    return (
        <main>
            <SortTopics />
            <ArticlesList topic={topic}/>
        </main>
    )
}

export default Home