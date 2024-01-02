const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");

const spanDays = document.getElementById("span-days");
const spanMonths = document.getElementById("span-months");
const spanYears = document.getElementById("span-years");


const handleSubmit = () => {
  day = parseInt(inputDay.value);
  month = parseInt(inputMonth.value);
  year = parseInt(inputYear.value);

  if (isNaN(day)) {
    inputDay.classList.add("error");
  }

  if (isNaN(month)) {
    inputMonth.classList.add("error");
  }

  if (isNaN(year)) {
    inputYear.classList.add("error");
  }

  if (!(isNaN(day) || isNaN(month) || isNaN(year))) {
    let today = new Date()
    let givenDate = new Date(year, month, day)
    
    const diffTime = Math.abs(today - givenDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    var nLeapYears = countLeapYears(year, today.getFullYear());
    var years = Math.floor(diffDays * 0.0027378507871321013);

    var nNoLeapYears = years - nLeapYears;

    diffDays -= (nLeapYears * 366 + nNoLeapYears * 365);
    var months = Math.ceil(diffDays * 0.03285420944558522);
    diffDays -= Math.floor(diffDays * 0.03285420944558522) * 30.4167;


    spanDays.textContent = Math.round(diffDays)
    spanMonths.textContent = months
    spanYears.textContent = years
  }
};

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const countLeapYears = (startYear, endYear) => {
    let counter = 0;
    for (var year = startYear; year <= endYear; year++) {
        if (isLeapYear(year))
            counter++
    }
    return counter;
}

const daysInMonth = (month, year) => {
    if (month == 2) return isLeapYear(year) ? 29 : 28;
    if (month <= 7) return month % 2 === 0 ? 30 : 31;
    return month % 2 === 0 ? 31 : 30;
}