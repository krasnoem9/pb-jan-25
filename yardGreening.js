function yardGreening (meters) {

    let firstCost = meters * 7.61;
    let totalCostDiscount = firstCost * 0.18;
    let finalCost = firstCost - totalCostDiscount

    console.log(`The final price is: ${finalCost} lv.`);
    console.log(`The discount is: ${totalCostDiscount} lv.`)
}

yardGreening (550);

