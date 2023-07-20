const SortOptions = (props) => {

    // const handleChangeTopic = (event) => {
    //     event.preventDefault()
    //     setTopic(event.target.value)
    // }

    // useEffect(() => {
    //     getTopics()
    //     .then((topics) => {
    //         setTopics(topics)
    //     })
    // }, [])

    return (
        <div className="sort-topics">

            {/* <select name="topics" id="topic-select" onChange={handleChangeTopic}>
                <option value="">Choose a topic</option>
                {topics.map((topic) => {
                    return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
            </select> */}

            <label htmlFor="sort-select">Sort by:</label>
            <select name="sort-select" id="sort-select">
                <option value="date">Date</option>
                <option value="comment-count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>

            
            <label htmlFor="order"></label>

            <input type="radio" id="desc" name="order" value="desc" checked></input>
            <label htmlFor="desc">Desc</label>

            <input type="radio" id="asc" name="order" value="asc"></input>
            <label htmlFor="asc">Asc</label>
            
        </div>
    )
}

export default SortOptions