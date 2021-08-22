const paragraph = document.getElementById('output')

export function writeOutput(outputValue) {
    paragraph.innerHTML = outputValue
}
export function writeDiffOutput({ years, months, days }) {
    writeOutput(`
    Лет: ${years}
    Месяцев: ${months}
    Дней: ${days}
    `)
}
export const updateTimer = (timerData) => {
    document.getElementById('timer__result').innerText = `Осталось ${timerData.hours} час. ${timerData.minutes} мин. ${timerData.seconds} сек.`;
}
export const showPage = (event) => {
    document.querySelectorAll('.page').forEach(elem => {
        if (!elem.classList.contains('hidden')) {
            elem.classList.add('hidden')
        }
    })
    document.getElementById(event.target.id.slice(0, -3)).classList.remove('hidden')
}