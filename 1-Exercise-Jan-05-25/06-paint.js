function paint(plasticTotal, paintTotal, thinnerTotal, hoursTotal) {

    let plasticEndPrice = (plasticTotal + 2) * 1.5;
    let paintEndPrice =  (paintTotal + paintTotal * 0.1) * 14.5;
    let thinnerEndPrice = thinnerTotal * 5;
    let endValue = plasticEndPrice + paintEndPrice + thinnerEndPrice + 0.4;
    let workersPrice = (endValue * 0.3) * hoursTotal;
    let finalCost = endValue + workersPrice;

    console.log(finalCost);
}

paint(10, 11, 4, 8);