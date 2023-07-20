const SortOptions = () => {

    return (
        <div className="sort-topics">

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