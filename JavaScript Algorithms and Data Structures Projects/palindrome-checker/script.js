function palindrome(str) {
    const text = "racecar";
    const alphaNumRegex = /^[a-z0-9]+$/i;
    const strArr = str.trim().toLowerCase().split("");
    
    // Filter out all non-empty strings from the strArr into the filteredArr
    const filteredArr = strArr.filter(char => char != " ")

    // Remove any non-alphanueric characters in the filteredArr
    filteredArr.forEach((char, index) => {
        if(!alphaNumRegex.test(char)) {
            filteredArr.splice(index, 1)
        }
    })
    // Just in case there are still non-alphanumeric characters, 
    // remove them (This is needed for the following palindrome: "0_0 (: /-\ :) 0-0")
    filteredArr.forEach((char, index) => {
        if(!alphaNumRegex.test(char)) {
            filteredArr.splice(index, 1)
        }
    })  
    
    const isPalindromeAcc = [];
    const filteredArrLength = filteredArr.length - 1;
    for(let char = 0; char <= (filteredArrLength / 2); char++) {
        const isPalindrome = !!(filteredArr[char] == filteredArr[filteredArrLength - char]);
        isPalindromeAcc.push(isPalindrome); 
    }
    return isPalindromeAcc.every(value => value == true); // true or false, depending on the wheather the isPalindromAcc has only true or false index values respectively
}


// #############
// This is optional (see the next comment)
 
const testPalindromes = ["eye", "_eye", "race car", "not a palindrome", "A man, a plan, a canal. Panama", "never odd or even", "nope", "almostomla", "My age is 0, 0 si ega ym", "1 eye for of 1 eye.", "0_0 (: /-\ :) 0-0", "five|\_/|four"]

testPalindromes.forEach(testPalindrome => {
    console.log(palindrome(testPalindrome)) // returns whether each is a palindrome or not
})