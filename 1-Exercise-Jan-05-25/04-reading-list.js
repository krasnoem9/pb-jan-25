function readingList(numberOfPages, pagesPerHour, numberOfDays) {

    let hoursTotal = numberOfPages / pagesPerHour;
    let hoursPerDay = hoursTotal / numberOfDays;
    console.log(Math.trunc(hoursPerDay))
}

readingList(212, 20, 2);