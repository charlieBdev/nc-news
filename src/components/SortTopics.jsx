const SortTopics = () => {
    return (
        <div className="sort-topics">

            <label htmlFor="topic-select">Sort by:</label>

            <select name="pets" id="pet-select">
                <option value="date">Date</option>
                <option value="comment-count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>

            <fieldset>
                <legend>Order by:</legend>
                <div>
                    <input type="radio" id="desc" name="desc" value="desc" checked></input>
                    <label htmlFor="desc">Descending</label>
                </div>
                <div>
                    <input type="radio" id="asc" name="asc" value="asc"></input>
                    <label htmlFor="asc">Ascending</label>
                </div>
            </fieldset>
            
            
        </div>
    )
}

export default SortTopics