// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// console.log("hello JavaScript")



const getTodayDate = () => {
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return ` ${daylist[day]}`

}
const getCurrentTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let prepend = (hour >= 12) ? 'PM' : ' AM';
    hour = (hour >= 12) ? hour - 12 : hour;

    if (hour === 0 && prepend === 'PM') {
        if (minute === 0 && second === 0) {
            hour = 12
            prepend = 'noon'
        } else {
            hour = 12;
            prepend = 'PM';
        }
    }
    if (hour === 12 && prepend === 'AM') {
        if (minute === 0 && second == 0) {
            hour = 12;
            prepend = 'Midnight'
        } else {
            hour = 12;
            prepend = "AM";
        }
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if(minute<10 ){
        minute = '0' + minute
    }
    if(second<10){
        second = '0'+second
    }
    return `${hour} : ${minute} : ${second} ${prepend}`
}
const day = getTodayDate();
const time = getCurrentTime();
console.log("Day ", day)
console.log("Time: ", time)