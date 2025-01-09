function concatenateData(firstName, projects) {
    let hours = projects * 3;
    console.log(`The architect ${firstName} will need ${hours} hours to complete ${projects} project/s.`);
}

concatenateData("George", 4);