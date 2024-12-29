document.addEventListener("DOMContentLoaded", () => {
    let endDate = new Date("2025-01-01")
    // DOM elements 
    const dayEl = document.getElementById("days")
    const hourEl = document.getElementById("hours")
    const minuteEl = document.getElementById("minutes")
    const secondsEl = document.getElementById("seconds")

    function formatDate(number) {
        /**
         * Formats a date
         * 
         */
        return (number < 10 && number >= 0) ? `0${number}` : number
    }
    function calcDiff(start, end) {
        /**
         * Calculates difference between two dates
         * @param {Date} start - Date for start of countdown
         * @param {Date} end - Date for end of countdown
         * 
         * Returns:
         *  An object containing the days, hours,
         *  minutes, seconds between the two dates.
         * 
         */
        let timeDiff = end.getTime() - start.getTime()
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
        timeDiff %= (1000 * 60 * 60 * 24)

        let hours = Math.floor(timeDiff / (1000 * 60 * 60))
        timeDiff %= (1000 * 60 * 60)

        let mins = Math.floor(timeDiff / (1000 * 60))
        timeDiff %= (1000 * 60)

        let secs = Math.floor(timeDiff / 1000)


        return {
            "days": formatDate(days),
            "hours": formatDate(hours),
            "mins": formatDate(mins),
            "secs": formatDate(secs)
        }
    }

    function updateCountdown(){
        /**
         * Updates countdown
         */
        let startDate = new Date()
        let diff = calcDiff(startDate, endDate)
        const {days, hours, mins, secs} = diff
        // Update DOM elements
        dayEl.textContent = days
        hourEl.textContent = hours
        minuteEl.textContent = mins
        secondsEl.textContent = secs
        console.log(diff)
    }
    // Dynamically update countdown
    setInterval(updateCountdown, 1000)


})