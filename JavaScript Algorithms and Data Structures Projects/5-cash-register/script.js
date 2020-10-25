function checkCashRegister(price, cash, cid) {
  
    if(price > cash) return console.log("Insufficient cash")
    let change = cash - price;
    const changeToReturn = {status: '', change: []}

    let searchableUnits = [];

    
    function getSearchableUnitsArray(units) {
        return units.split('_')
    };

    const UNIT_AMOUNT = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER":  0.2,
        "ONE":  1,
        "FIVE":  5,
        "TEN":  10,
        "TWENTY":  20,
        "ONE HUNDRED": 100,
    }

    // Set the currency unit to start and end with when searching for change
    if (change < 1) searchableUnits = getSearchableUnitsArray('quarter_dime_nickel_penny')

    if (change >= 1 && change < 5) 
        searchableUnits = getSearchableUnitsArray('one_quarter_dime_nickel_penny')

    if (change >= 5 && change < 10) 
        searchableUnits = getSearchableUnitsArray('five_one_quarter_dime_nickel_penny')

    if (change >= 10 && change < 20) 
        searchableUnits = getSearchableUnitsArray('ten_five_one_quarter_dime_nickel_penny')

    if (change >= 20 && change < 100) 
        searchableUnits = getSearchableUnitsArray('twenty_ten_five_one_quarter_dime_nickel_penny')

    if (change >= 100) 
        searchableUnits = getSearchableUnitsArray('one hundred_twenty_ten_five_one_quarter_dime_nickel_penny')

    
    for(let idx = 0; idx < searchableUnits.length; idx++) {
        if(change == 0){
            break;
        } else if(idx == searchableUnits.length - 1 && change > 0) {
            changeToReturn.status = "INSUFFICIENT_FUNDS"
        }
        for(let cidIndex = 0; cidIndex < cid.length; cidIndex++) {
            let [unit, quantity] = cid[cidIndex];
            if(unit == searchableUnits[idx].toUpperCase()) {
                let currencyUnitAmount = UNIT_AMOUNT[unit]
                if(!currencyUnitAmount) {
                    console.log("No amount exists for the unit ", unit);
                    break;
                }
                // Check the number of times the currencyUnitAmount can be taken from the change
                let numberOfTimesAmountToReturnCanDivideChange = Math.floor(change / currencyUnitAmount);
                
                // Calculate the amount of change to return based on the currencyUnitAmount to the number of times it can be taken from the change
                let changeToGive = (currencyUnitAmount * numberOfTimesAmountToReturnCanDivideChange);

                if(changeToGive > quantity || numberOfTimesAmountToReturnCanDivideChange < 1){
                    continue;
                }

                change -= changeToGive
                
                changeToReturn.change.push([unit, changeToGive])
                changeToReturn.status = "OPEN"
            }
        }
    }

    return changeToReturn;
  }

const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

console.log(result)
// Shows insufficient funds, instead of OPEN; Fix this
