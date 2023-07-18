const SortOptions = () => {
    return (
        <div className="sort-topics">

            <select name="topics" id="topic-select">
                <option value="topic-0">Choose a topic</option>
                <option value="topic-1">Topic 1</option>
                <option value="topic-1">Topic 2</option>
                <option value="topic-1">Topic 3</option>
            </select>

            <label htmlFor="sort-select">Sort by:</label>

            <select name="sort-select" id="sort-select">
                <option value="date">Date</option>
                <option value="comment-count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>

            
            <label htmlFor="order"></label>

            <input type="radio" id="desc" name="order" value="desc" checked></input>
            <label htmlFor="desc">Descending</label>

            <input type="radio" id="asc" name="order" value="asc"></input>
            <label htmlFor="asc">Ascending</label>
            
        </div>
    )
}

export default SortOptions