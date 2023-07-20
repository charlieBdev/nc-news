export const formatDate = (date) => {
    return new Date(Date.parse(date)).toLocaleString('en-GB', { timeZone: 'UTC' })
        .replaceAll('/', '-')
        .slice(0, -3)
}