function schoolSupplies(penCount, markersCount, litersDetergent, percentageDiscount) {

    let penPrice = penCount * 5.8;
    let markersPrice = markersCount * 7.2;
    let litersPrice = litersDetergent * 1.2;

    let totalValue = penPrice + markersPrice + litersPrice;
    let discountDecimal = percentageDiscount / 100
    let endValue = totalValue * discountDecimal
    let totalPrice = totalValue - endValue

    console.log(totalPrice);
}

schoolSupplies(2, 3, 4, 25);