const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const monthNames = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"];

const today = new Date();
const hrs = today.getHours();
const dayOfWeek = weekday[today.getDay()];
const date = `${dayOfWeek}, ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

let greet;
if (hrs < 12)
    greet = 'good morning.';
else if (hrs >= 12 && hrs <= 17)
    greet = 'good afternoon.';
else
    greet = 'good evening.';

document.getElementById('lbl').innerHTML = `
    <div id="date">${date}</div>
    <div class="greeting">${greet}</div>
`;
