import { formatDistance } from "date-fns"

export const sum = (a, b) => a + b

console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))