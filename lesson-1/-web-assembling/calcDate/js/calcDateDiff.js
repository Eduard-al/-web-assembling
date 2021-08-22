import { DateTime } from "./luxon.js"

export default function calcDateDiff(dateFormString, dateToString) {
    if (dateFormString < dateToString) {
        [dateToString, dateFormString] = [dateFormString, dateToString]

    }
    const dateFrom = DateTime.fromISO(dateFormString)
    const dateTo = DateTime.fromISO(dateToString)

    const dateDiff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject()

    return dateDiff
}