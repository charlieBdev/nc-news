import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const SortOptions = () => {

    const [sortOrder, setSortOrder] = useState('desc')
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

    const handleClick = (event) => {
        event.preventDefault()
        console.log(sortOrder, '<<< sortOrder')
        setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
        console.log(sortOrder, '<<< sortOrder')
        setOrder(sortOrder)
    }

    return (
        <div className="sort-options">

            <label htmlFor="sort-select">Sort by:</label>
            <select name="sort-select" id="sort-select" onChange={(e) => setSortBy(e.target.value)}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select> 

            <button className="order-btn" value={sortOrder} onClick={handleClick}>{sortOrder}</button>
            
        </div>
    )
}

export default SortOptions