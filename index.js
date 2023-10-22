function reverseString() {
    const inputString = document.getElementById("inputString").value;
    const reversedString = inputString.split("").reverse().join("");
    document.getElementById("output").textContent = "Reversed String: " + reversedString;
}
function checkPalindrome() {
    const inputPalindrome = document.getElementById("inputPalindrome").value;
    const cleanedInput = inputPalindrome.replace(/\s/g, ''); // Remove any spaces
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    const resultMessage = isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.';
    document.getElementById("palindromeOutput").textContent = resultMessage;
}
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById("totalAmount").textContent = "Please enter valid numbers.";
    } else {
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;
        document.getElementById("totalAmount").textContent = "Total Amount (including tip): $" + totalAmount.toFixed(2);
    }
}
