        // 1. Reverse text
        // Given a string of characters as input, write a function that returns it with the characters reversed.Don't use reverse function, use loops.

function reverseText(text) {
    let temp = "";
    
    for (let x = text.length - 1; x >= 0; x--) {
         temp += text[x]

    }
    console.log(temp); 
   
}

reverseText('Hello World!')

        // 2. Palindrome checker
        // A palindrome is a word or phrase that reads the same backward as forward.Write a function that checks for this.Don't use reverse function, use loops.

function reversePalindrome(word) {
    let temp = "";

   for (let i = word.length - 1; i >= 0; i--) {
        temp += word[i]

    }
    console.log(temp)
        if (temp===word) {
        return true
        }
        else {false}
}

// reversePalindrome("kavak")

        // 3. FizzBuzz
        // Given a number as an input, print out every integer from 1 to that number.However, when the integer is divisible by 2, print out “Fizz”; 
        // when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.Use for loops.

function FizzBuzz(number) {
    let Myarray= []

    for (let i=1; i<= number; i++) {
                if (i%3===0 && i%2===0)
                Myarray.push('FizzBuzz');

                else if (i%2===0)
                Myarray.push('Fizz');

                else if (i % 3 === 0)
                Myarray.push('Buzz');

                else Myarray.push(i);

            }
            return Myarray;
            
}
        console.log(FizzBuzz(13));
        FizzBuzz(13);


        // 4. Reverse Array
        // Given an array of items, reverse the order.Don't use reverse function, use loops.
    function reverseArray(mix) {
    let reversedArray = [];
        for (let i=mix.length-1; i>=0; i--){
            reversedArray.push(mix[i]);

        }
        return reversedArray


    }
        let mix = [22, 'hi', 12];
        console.log(reverseArray(mix));

        // 5. Reverse Words
        // Given a phrase, reverse the order of the characters of each word.Don't use reverse function, use loops.
    
function reverseWord(zin) {
    let wordOfZin = zin.split(' ');
    let reservedSentence="";

    for (let i = 0; i < wordOfZin.length; i++) {
        
        let word = wordOfZin[i];
        
        let temp=""

        for (let x = word.length-1; x >=0; x--){
          
            temp= temp+ word[x];
        }
       
        reservedSentence +=temp + ' '
    }
    
    console.log(reservedSentence);
    return reservedSentence
}    

reverseWord("I love Javascript!")


        // 6. Capitalization
        // Given a phrase, capitalize every word.

        function capitalizeWords(sentence) {
        let splitSent = sentence.toLowerCase().split(' ');
        console.log(splitSent)
                for (let i = 0; i < splitSent.length; i++) {
                
                splitSent[i] = splitSent[i].charAt(0).toUpperCase() + splitSent[i].substring(1);
                }
        
        return splitSent.join(' ');
        }

        console.log(capitalizeWords("Ik ben een nieuwe nederlander!"));

        // 7. Subtract two Sets
        // Given two arrays that contains integers, remove the integers of second array from the first.

var array1 = [1, 2, 4, 6]
var array2 = [2, 6]

for (var i = 0; i < array2.length; i++) {
    
    for (var j = 0; j < array1.length; j++) {
       
        if (array2[i] == array1[j]) {
          
            array1 = array1.slice(0, j).concat(array1.slice(j + 1, array1.length));
            
        }
    }
}
console.log(array1);