import { formatDistanceToNow } from 'date-fns'

// export const capitaliseTopic = (word) => {
//     return word.charAt(0).toUpperCase() + timeAgo.slice(1)
// }

export const formatDate = (date) => {
    const inputDate = new Date(Date.parse(date));
    const timeAgo = formatDistanceToNow(inputDate, { addSuffix: true })
    return timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1)
}

export function limitTextLength(text, maxLength) {
    if (text.length <= maxLength) {
        return text
    } else {
        return text.slice(0, maxLength - 3) + '...'
    }
}

import { BiCodeAlt, BiFootball } from "react-icons/bi"
import { PiCookingPotBold } from "react-icons/pi"

export function getTopicIcon(topic) {

    let icon = null

    if (topic === 'coding') {
        icon = <BiCodeAlt />
    } else if (topic === 'football') {
        icon = <BiFootball />
    } else if (topic === 'cooking') {
        icon = <PiCookingPotBold />
    }
    return icon
}