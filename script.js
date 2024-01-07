function nextPalindrome(num) {
  //your JS code here.
	 if (typeof num !== 'number' || num <= 0 || num > 100000 || !Number.isInteger(num)) {
        alert("Please enter a valid positive integer up to 100000.");
        return;
    }

    // Function to check if a number is a palindrome
    function isPalindrome(num) {
        const numStr = num.toString();
        return numStr === numStr.split('').reverse().join('');
    }

    // Find the next palindrome
    let nextNumber = num + 1;
    while (!isPalindrome(nextNumber)) {
        nextNumber++;
    }

    // Display the result
    alert("The next palindrome after " + num + " is: " + nextNumber);
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
