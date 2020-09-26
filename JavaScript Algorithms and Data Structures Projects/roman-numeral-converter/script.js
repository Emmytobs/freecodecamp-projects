function convertToRoman(num) {
    const numberToRomanNumeralConverter = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",6: "VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X", 20: "XX", 30: "XXX", 40: "XL",50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"};
    let romanNumeral = ""
  
    // The parameter "num" has to be converted to a string
    num = String(num)
  
    for(let digit = 0; digit < num.length; digit++) {
      const lastIndex = num.length - 1;
      const numberOfZeros = lastIndex - digit;
      const toNearest = num[digit] * Math.pow(10, numberOfZeros);
      if(toNearest == 0) {
        continue;
      }
      const correspondingRomanNumeral = numberToRomanNumeralConverter[toNearest];
      romanNumeral += correspondingRomanNumeral;
    }  
    return romanNumeral;
}
  
convertToRoman(2);
  