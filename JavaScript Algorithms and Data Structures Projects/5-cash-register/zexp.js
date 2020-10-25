function checkCashRegister(price, cash, cid) {
  
    if(price > cash) return console.log("Insufficient cash")
    let change = cash - price;
    const changeToReturn = {status: '', change: []}

    let unitsArr = [];

    function unitsToReturn(listOfUnits) {
        return listOfUnits.split('_')
    };

    function getAmountToReturnForEachUnit(unit) {
        let amount;
        unit = unit.toUpperCase();
        switch(unit) {
            case "PENNY":
                amount = 0.01
                break;
            case "NICKEL":
                amount = 0.05
                break;
            case "DIME":
                amount = 0.1
                break;
            case "QUARTER":
                amount = 0.25
                break;
            case "ONE":
                amount = 1
                break;
            case "FIVE":
                amount = 5
                break;
            case "TEN":
                amount = 10;
                break;
            case "TWENTY":
                amount = 20;
                break;
            case "ONE HUNDRED":
                amount = 100;
                break;
            default:
                amount = null;
        }
        return amount;
    }

    if (change < 1) unitsArr = unitsToReturn('quarter_dime_nickel_penny')
    if (change >= 1 && change < 5) unitsArr = unitsToReturn('one_quarter_dime_nickel_penny')
    if (change >= 5 && change < 10) unitsArr = unitsToReturn('five_one_quarter_dime_nickel_penny')
    if (change >= 10 && change < 20) unitsArr = unitsToReturn('ten_five_one_quarter_dime_nickel_penny')
    if (change >= 20 && change < 100) unitsArr = unitsToReturn('twenty_ten_five_one_quarter_dime_nickel_penny')
    if (change >= 100) unitsArr = unitsToReturn('one hundred_twenty_ten_five_one_quarter_dime_nickel_penny')
    

    for(let idx = 0; idx < unitsArr.length; idx++) {
        if(change == 0){
            break;
        } else if(idx == unitsArr.length - 1 && change > 0) {
            changeToReturn.status = "INSUFFICIENT_FUNDS"
        }
        for(let unitIdx = 0; unitIdx < cid.length; unitIdx++) {
            let [unit, quantity] = cid[unitIdx];
            if(unit == unitsArr[idx].toUpperCase()) {
                let amountToReturnForEachUnit = getAmountToReturnForEachUnit(unit)
                if(!amountToReturnForEachUnit) {
                    console.log("No amount exists for the unit ", unit);
                    break;
                }
                // For each currency unit, calculate the quanity to return as change
                let numberOfTimesAmountToReturnCanDivideChange = Math.floor(change / amountToReturnForEachUnit);
                
                // console.log(numberOfTimesAmountToReturnCanDivideChange)

                let possibleChangeToReturn = (amountToReturnForEachUnit * numberOfTimesAmountToReturnCanDivideChange);

                if(possibleChangeToReturn > quantity || numberOfTimesAmountToReturnCanDivideChange < 1){
                    continue;
                }

                change -= possibleChangeToReturn
                
                changeToReturn.change = changeToReturn.change.concat([unit, possibleChangeToReturn])
                changeToReturn.status = "OPEN"
            }
        }
    }

    console.log(changeToReturn);
    // return changeAcc;
  }
  
//   
// Based on the change amount, deduce the progression of units of the change to be returned and store it in an array
// Loop over that array and, from the cash in register, subtract the inner array's quantity (which is corresponding to the unit at the current iteration) from the change amount E.g: 80 - 60 ('Twenty" is the first unit to return), store the reduced change amount and repeat.
// At the end, if change is zero, then return the object with the change and the status of open
// else return the object with an empty change array and the status of INSUFFICIENT_FUNDS

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
