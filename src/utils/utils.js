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
