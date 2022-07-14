

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    
    let dd = new Date(dateString).getDay();
    
    switch(dd) {
    case 0:
        //Sunday
        dayName = "Sunday";
        break;
    case 1:
        //Monday
        dayName = "Monday";
        break;
    case 2:
        //Tuesday
        dayName = "Tuesday";
        break;
    case 3:
        //Wednesday
        dayName = "Wednesday";
        break;
    case 4:
        //Thursday
        dayName = "Thursday";
        break;
    case 5:
        //Friday
        dayName = "Friday";
        break;
    case 6:
        //Saturday
        dayName = "Saturday";
        break;       
    }
    
    return dayName;
}
