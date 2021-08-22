import { Duration } from "./luxon.js";
import { updateTimer } from "./output.js";
/* import { Howl, Howler } from 'howler'; */


const sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
});





let timerTick = null;

export function startTimer(timerObj) {


    let timerData = Duration.fromObject(timerObj);
    updateTimer(timerData);

    timerTick = setInterval(() => {
        let dif = Duration.fromObject({ seconds: 1 });

        console.log(timerData)


        if (timerData.seconds === 0) {
            dif = Duration.fromObject({ minutes: 1, seconds: -60 });

            console.log(timerData.seconds)
            if (timerData.minutes === 0) {
                dif = Duration.fromObject({ minutes: -60, seconds: -60, hours: 1 });

            }

        }
        if (timerData.as('seconds') === 0) {
            console.log('ok')
            clearInterval(timerTick);
            console.log(sound.play())
            return

        }
        timerData = timerData.minus(dif);
        updateTimer(timerData);
    }, 1000)
}

export function stopTimer() {
    clearInterval(timerTick);
}