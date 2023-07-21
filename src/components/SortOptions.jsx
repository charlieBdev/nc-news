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

            <label htmlFor="order-select">Order:</label>
            <select name="order-select" id="order-select" onChange={(e) => setOrder(e.target.value)}>
                <option value="desc">Desc</option>
                <option value="asc">Asc</option>
            </select>
            
        </div>
    )
}

export default SortOptions