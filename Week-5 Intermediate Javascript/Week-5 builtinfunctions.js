// 1. Find Highest Number inside an array
// Write a function that takes an array returns highest number of the array

    function highestvalue(arr) {
       return Math.max(...arr)
    }
    let arr= [0, 5, -1, 10, 82, -99]
    console.log(highestvalue(arr));

// 2. count words inside a string
// Write a function that takes an and retruns a nmuber of words. ('words leave after space')

    function countWords(string) {
    return string.split(" ").length;
    }
    let string = "Hello world!";
    console.log(countWords(string));

// 3. find number of the letters
// write a function that takes 2 elements one is a letter the other is an array.
// first convert to array to a string.return numbers of the letters inside the string

    function countLetters(lettr,arrWord) {
    let newArr = arrWord.join('').split('');  
    let count=0;
    
        for (let i = 0; i < newArr.length; i++) {
        if (newArr[i]===lettr)
        count++;
        }
        return count;
    }
    console.log(countLetters('e', ['Mehmet','Sahin']));