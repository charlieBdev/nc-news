const SortOptions = (props) => {

    const { setSortOrder, setSortBy } = props

    return (
        <div className="sort-options">

            <label htmlFor="sort-select">Sort by:</label>
            <select name="sort-select" id="sort-select" onChange={(e) => setSortBy(e.target.value)}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>

            <label htmlFor="order-select">Order:</label>
            <select name="order-select" id="order-select" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="desc">Desc</option>
                <option value="asc">Asc</option>
            </select>
            
        </div>
    )
}

export default SortOptions