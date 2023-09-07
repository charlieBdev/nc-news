// export const formatDate = (date) => {
//     return new Date(Date.parse(date)).toLocaleString('en-GB', { timeZone: 'UTC' })
//         .replaceAll('/', '-')
//         .slice(0, -3)
// }

import { formatDistanceToNow } from 'date-fns';

export const formatDate = (date) => {
    const inputDate = new Date(Date.parse(date));
    const timeAgo = formatDistanceToNow(inputDate, { addSuffix: true });
    return timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1)
};

export function limitTextLength(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    } else {
        // Truncate the text and append "..."
        return text.slice(0, maxLength - 3) + '...';
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