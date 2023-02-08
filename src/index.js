import { sum } from "./sum";
import { formatDistance } from "date-fns"

console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))