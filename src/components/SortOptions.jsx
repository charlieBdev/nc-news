import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { TbSortAscending } from "react-icons/tb"
import { TbSortDescending } from "react-icons/tb"

export const SortOptions = () => {

    const [sortOrder, setSortOrder] = useState("desc")

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
        setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    }

    return (
        <div className="flex justify-center items-center space-x-3 border">
            <div className="space-x-3">
                <label htmlFor="sort-select">Sort by:</label>
                <select className="border" name="sort-select" id="sort-select" onChange={(e) => setSortBy(e.target.value)}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
                </select>
            </div>
            <div className="flex space-x-3 items-center">
                <button className={sortOrder === 'desc' ? 'border text-xl' : 'text-xl'} value='desc' onClick={(e) => setOrder('asc')}><TbSortAscending /></button>
                <button className={sortOrder === 'asc' ? 'border text-xl' : 'text-xl'} value='asc' onClick={(e) => setOrder('desc')}><TbSortDescending /></button>
            </div>
        </div>
    )
}
