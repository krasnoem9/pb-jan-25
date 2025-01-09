function fishTankLiters(length, width, height, percentage) {
    let volumeTotal = length * width * height; // Volume in cubic cm
    let volumeInLiters = volumeTotal * 0.001; // Convert to liters
    let percentageValue = percentage / 100;  // Convert percentage to decimal
    let usableVolume = volumeInLiters * (1 - percentageValue); // Account for occupied space

    console.log(usableVolume);

}

fishTankLiters (85, 75, 47, 17);