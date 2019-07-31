// Truncate String

function truncateString(text, num) {
    console.log("text.length" , text.length);

    if (text.length > num) {
        var shortener = text.slice(0, num) + "...";
        return shortener;
    } else {
        return text; }

}
var firsttext = "A-tisket a-tasket A green and yellow basket";
var secondtext = "Peter Piper picked a peck of pickled peppers";
var result= truncateString(firsttext, 8);
console.log(result);


// Confirming Ending


function ConfirmEnd(first, scnd) {
    var x = first.length;
    var y = scnd.length;
    var rest = first.slice(x - y, x);
    console.log(rest);
    if (rest == scnd) {
        return true;
    } else {
        return false;
    }
}

var first = "Open sesame";
var scnd = "same";
var result = ConfirmEnd(first, scnd);
console.log(result);

// 1. Seconds to Minutes

function Sec2Min(sec) {
    if (sec >= 60) {
        return Math.floor(sec / 60) + " minutes and " + (sec % 60) + " seconds.";
    }
    else {
        return sec + " seconds."
    }
}
var result = Sec2Min(90);
console.log(result);

// 2. Print the written number with prefix

function Prefix(number) {
    return console.log("Number is: " + number )
}
Prefix(22)

// 3. Remove the 2nd string from the 1th string

function RemoveStr(first, second) {
    return first.replace(second, " ")
}
var first = "I am a good man.";
var second = "man";
var result = RemoveStr(first, second);
console.log(result);

// 4. Replace the 2nd string with the 3rd string

function RemoveStr(first, second, third) {
    return first.replace(second, third)
}
var first = "I am a bad person.";
var second = "bad";
var third = "good"
var result = RemoveStr(first, second, third);
console.log(result);

// 5. Return the closest bigger even number of the given number

function Bigger(value) {
    if (value % 2 == 0) {
        return value + 2
    }
    else { return value + 1 }
}

console.log(Bigger(354))
