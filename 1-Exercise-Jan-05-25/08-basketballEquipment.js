function basketballEquipment(annualFee) {

    let shoesPrice = 0.6 * annualFee;
    let clothesPrice = 0.8 * shoesPrice;
    let ballPrice = (1/4) * clothesPrice;
    let accessoriesPrice = (1/5) * ballPrice;
    let totalCost = annualFee + shoesPrice + clothesPrice + ballPrice + accessoriesPrice;

    console.log(totalCost);
}       

basketballEquipment(365);