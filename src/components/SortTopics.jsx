const SortTopics = () => {
    return (
        <div className="sort-topics">
            <select>
                <option>Date</option>
                <option>Comment count</option>
                <option>Votes</option>
            </select>
            <input type="radio">desc</input>
            <input type="radio">asc</input>
        </div>
    )
}

export default SortTopics