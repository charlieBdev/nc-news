import { useSearchParams } from "react-router-dom"

const SortOptions = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const setSortBy = (sort_by) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('sort_by', sort_by)
        setSearchParams(newParams)
    }

    const setOrder = (order) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('order', order)
        setSearchParams(newParams)
    }

    return (
        <div className="sort-options">

            <label htmlFor="sort-select">Sort by:</label>
            <select name="sort-select" id="sort-select" onChange={(e) => setSortBy(e.target.value)}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select> 

            <button className="order-btn" value='desc' onClick={(e) => setOrder(e.target.value)}>desc</button>
            <button className="order-btn" value='asc' onClick={(e) => setOrder(e.target.value)}>asc</button>
            
        </div>
    )
}

export default SortOptions