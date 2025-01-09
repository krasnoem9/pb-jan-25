function foodDelivery(chickenMenu, fishMenu, vegMenu) {

    let totalCost = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
    let dessertCost = totalCost * 0.2;
    let finalPrice = totalCost + dessertCost + 2.5;

    console.log(finalPrice);
}

foodDelivery(2, 4, 3);