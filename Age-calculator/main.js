const dayRequired = document.querySelector('.day-require');
const monthRequired = document.querySelector('.month-require');
const yearRequired = document.querySelector('.year-require');
const yearOutput = document.querySelector('.year-output');
const monthOutput = document.querySelector('.month-output');
const dayOutput = document.querySelector('.day-output');
const SubmitBtn = document.querySelector('.btn');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const inputRequiredError = 'This field is required';
const inputDayError = 'Must be a valid day';
const inputMonthError = 'Must be a valid month';
const inputYearError = 'Must be in the past';
const dayLabel = document.getElementById('day-label')
const monthLabel = document.getElementById('month-label')
const yearLabel = document.getElementById('year-label')

// CONDITIONS FOR DAY INPUT
function CheckDayInput(){
    let value = inputDay.value;
    if(value == ''){
        dayRequired.innerHTML = inputRequiredError;
        inputDay.style.borderColor = "red";
        dayLabel.style.color = "red";
        return false;
    }
    else if(value < 1 || value > 31){
        dayRequired.innerHTML = inputDayError;
        inputDay.style.borderColor = "red";
        dayLabel.style.color = "red";
        return false;
    }

    else{
        dayRequired == '';
        inputDay.style.borderColor = "black";
        dayLabel.style.color = "black";
        dayRequired.innerHTML = '';
        return true;

    }
}

// CONDITIONS FOR MONTH INPUT
function CheckMonthInput(){
    let value = inputMonth.value;
    if(value == ''){
    monthRequired.innerHTML = inputRequiredError;
    inputMonth.style.borderColor = "red";
    monthLabel.style.color = "red";
        return false;
    }
    else if(value < 1 || value > 12){
        monthRequired.innerHTML = inputMonthError
        inputMonth.style.borderColor = "red";
        monthLabel.style.color = "red";
        return false;
    }
    else{
        monthRequired == '';
        inputMonth.style.borderColor = "black";
        monthLabel.style.color = "black";
        monthRequired.innerHTML = '';
        return true;

    }
}

// CONDITIONS FOR YEAR INPUT
function CheckYearInput(){
    let value = inputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear)
    if(value == ''){
    yearRequired.innerHTML = inputRequiredError;
    inputYear.style.borderColor = "red";
    yearLabel.style.color = "red";
        return false;
    }
    else if(value > currentYear){
        yearRequired.innerHTML = inputYearError;
        inputYear.style.borderColor = "red";
        yearLabel.style.color = "red";
         return false;
    }
    else{
        yearRequired.innerHTML == '';
        inputYear.style.borderColor = "black";
        yearLabel.style.color = "black";
        yearRequired.innerHTML = '';
        return true;

    }
}

// AGE CALCULATOR FUNCTION
function calculateAge(birthday){
    var birthdate = new Date(birthday);
    var today = new Date();

 var years = today.getFullYear() - birthdate.getFullYear();
 var months = today.getMonth() - birthdate.getMonth();
 var days = today.getDate() - birthdate.getDate();

//   IF THE BIRTHDATE MONTH AND DAY ARE AFTER THE CURRENT MONTH AND DAY, SUBSTRACT ONE YEAR FROM THE AGE.

 if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }

    yearOutput.innerHTML = years;
    monthOutput.innerHTML = months;
    dayOutput.innerHTML = days;
}

// SUBMIT BUTTON SECTION
SubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let day = CheckDayInput();
    let month = CheckMonthInput();
    let year = CheckYearInput();
    if(!day || !month || !year) return
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
})