export const formatDate = (date) => {
    return new Date(Date.parse(date)).toLocaleString('en-GB', { timeZone: 'UTC' })
}