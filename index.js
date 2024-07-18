let submit = document.querySelector(".submit").addEventListener('click', function(){
    let dayInput = document.querySelector(".dayInput").value;
    let monthInput = document.querySelector(".monthInput").value;
    let yearInput = document.querySelector(".yearInput").value;

    var today = new Date();
    var day = today.getUTCDate();
    var month = today.getUTCMonth() + 1;
    var year = today.getUTCFullYear();

    let ageYear = year - yearInput;
    let ageMonth = month - monthInput;
    let ageDay = day - dayInput;

    if (ageDay < 0) {
        ageMonth--;

        let previousMonth = month === 1 ? 12 : month - 1;

        let dayInPreviousMonth = new Date(year, previousMonth, 0).getDate()

        ageDay += dayInPreviousMonth;
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    document.querySelector(".result").innerText = 
    `Your age is ${ageYear} years, ${ageMonth} months, and ${ageDay} days.`;

})

