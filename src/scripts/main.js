AOS.init();

const timeSpan = document.querySelector("#counter");
const eventDate = new Date("2024-12-12T19:00:00");

const interval = setInterval(() => countDown(eventDate, interval), 1000);

function countDown(eventDate, intervalToClear) {
    const currentDate = new Date();
    const currentDateTimestamp = currentDate.getTime();
    const eventTimestamp = eventDate.getTime();

    const remainingMiliseconds = eventTimestamp - currentDateTimestamp;

    if (remainingMiliseconds > 0) {
        const remainingDays = remainingMiliseconds/1000/60/60/24;
    
        const remainingHours = getRemainder(remainingDays) * 24;
        const remainingMinutes = getRemainder(remainingHours) * 60;
        const remainingSeconds = getRemainder(remainingMinutes) * 60;
    
        const remainingTimeInSeparateUnits = [remainingDays, remainingHours, remainingMinutes, remainingSeconds].map(v => Math.trunc(v));
    
        timeSpan.innerText = `${remainingTimeInSeparateUnits[0]}d ${remainingTimeInSeparateUnits[1]}h ${remainingTimeInSeparateUnits[2]}m ${remainingTimeInSeparateUnits[3]}s`;
    } else {
        clearInterval(intervalToClear);
    }
}

function getRemainder(upperTimeUnit) {
    return (upperTimeUnit > 1)
    ? upperTimeUnit % Math.trunc(upperTimeUnit)
    : upperTimeUnit
}