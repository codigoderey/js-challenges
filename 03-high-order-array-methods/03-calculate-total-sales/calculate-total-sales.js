function calculateTotalSalesWithTax(arr, tax = 8) {
    let totalPrice = 0;

    tax = 1 + tax / 100
    
    for(i = 0; i < arr.length; i++){ 
        totalPrice = totalPrice + arr[i].price * arr[i].quantity
    }

    let priceWithTax = totalPrice * tax

    return priceWithTax

}

module.exports = calculateTotalSalesWithTax;
