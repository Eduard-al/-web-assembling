import { writeOutput, writeDiffOutput, showPage } from './output.js'
import getDateDiff from './calcDateDiff.js'

import { stopTimer, startTimer } from "./timer.js";


const form = document.getElementById('dateDiffForm')

document.querySelectorAll('.cmdBtn').forEach(elem => elem.addEventListener('click', showPage))

form.onsubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)


    const dateFrom = formData.get('dateForm')
    const dateTo = formData.get('dateTo')

    if (!dateFrom || !dateTo) {
        writeOutput('Для расчета промежутка необходимо заполнить оба поля')
        console.log('error')
        return
    }

    writeDiffOutput(getDateDiff(dateFrom, dateTo))


}
function handleTimerSetFormSubmit(event) {
    event.preventDefault();

    startTimer({
        hours: isNaN(parseInt(timerSetForm.timerHours.value)) ? 0 : parseInt(timerSetForm.timerHours.value),
        minutes: isNaN(parseInt(timerSetForm.timerMinutes.value)) ? 0 : parseInt(timerSetForm.timerMinutes.value),
        seconds: isNaN(parseInt(timerSetForm.timerSeconds.value)) ? 0 : parseInt(timerSetForm.timerSeconds.value)
    });

    document.getElementById("stopBtn").hidden = false;
}

const timerSetForm = document.getElementById("timerSetForm");
timerSetForm.addEventListener("submit", handleTimerSetFormSubmit);

document.getElementById("stopBtn").addEventListener("click", stopTimer);

