// Get current date and display it as text with of id='time'
// Make it run in current time

const currentTime = document.querySelector('#hrMin');
const timeUnit = document.querySelector(".ampm");
// GET CURRENT TIME
function time(){
    let d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();
    let ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? '0'+ m : m;
    currentTime.innerHTML = h + ":" + m;
    timeUnit.innerHTML = ampm;  
} 
setInterval(time,1000);

// GET CURRENT DATE
const currentDate = document.getElementById('date');

function today() {
    let dt = new Date();
    let day = dt.getDay();// Get day = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday']
    let dd = dt.getDate(); // Get the weekday as a number (0-6)
    let dm = (dt.getMonth() + 1); // Get the month as a number (0-11)
    let dayArray = ['Monday', 'Tuesday', ' Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for(i = 0; i < dayArray.length; i++) { // This loop always output number then you can use it for other data type looping
        // Loop the valueOf dayArray from the getDay method number value
        // var x = dayArray[i];
        var x = (dayArray[(day + i) % 7]) // will output the day of the week 
    }
    let dfy = dt.getFullYear(); // index always start from zero. | Get the year as a four digit number (yyyy).
    if(dd < 10) {
        dd = '0' + dd;
    } 
    if(dm < 10) {
        dm = '0' + dm;
    }
    // get curent day = Monday

    currentDate.innerHTML = x + " | " + dd + " - " + dm + " - " + dfy; 
};
today();

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getTime('Novemver',6,1992); // Check millisecond starting from this date.

// Buttons
const slideBtn = document.querySelector('#slideButton');

// Qoutes
var i = 0;
var qoutesArray = [];

// Array of qoutes
qoutesArray[0] = 'When something is important enough you do it even if the odds are not in your favor'
qoutesArray[1] = 'The more you know the less you fear'
qoutesArray[2] = 'The journey of a thousand miles begins with a single step'
qoutesArray[3] = 'You can work harder than that'
qoutesArray[4] = 'We think We become'
qoutesArray[5] = 'One beautiful heart is better than a thousand beautiful faces'
qoutesArray[6] = 'To be old and wise you must first be young and stupid'
qoutesArray[7] = 'Winner never quits, Loser never wins'
qoutesArray[8] = 'If you are not willing to risk the unusual you will have to settle for the ordinary'
qoutesArray[9] = 'Stay away from negative people, they have a problem for every solution'
qoutesArray[10] = 'Success is nothing more than a few simple discipline, practice everyday'
qoutesArray[11] = 'Learn how to be happy with what you have while you pursue all that you want'
qoutesArray[12] = 'Constantly think about how you could be doing thing better, keep questioning yourself'
qoutesArray[13] = 'Do not treat people as bad as they are, treat them as good as you are'
qoutesArray[14] = 'If you talk about it is a dream, If you invision it, it is possible but If you schedule it, It is real'
qoutesArray[15] = 'It you keep focusing on what you fear that is where you end up'

// Change the qoutes

slideBtn.addEventListener('click', function(){

    document.getElementById('q').textContent = qoutesArray[i];
     if(i < qoutesArray.length - 1){
        i++;
    } else {
        i = 0;
    };

});

// Style

