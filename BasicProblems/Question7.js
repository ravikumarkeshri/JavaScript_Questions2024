// JavaScript: Find 1st January be a Sunday between a range of years

for (year = 2014; year <= 2050; year++) {
    let day = new Date(year, 0, 1);
    if (day.getDay() === 0) {
        console.log("1st Janusary is being a Sunday in", year);
    }
}