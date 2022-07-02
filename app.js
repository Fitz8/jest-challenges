const add = (num1, num2) => {
    return num1 + num2;
}

const myArray = () => {
    return ["Ben", "Stuart", "Katie"];
}


//Challenge functions


//A value that is truthy. A value that is not falsy.

const truthy = () => {
    return 1;
}

// Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function

const createUser = (first, last) => {
    const user = {firstname: first};
    user.lastName = last;
    return user;
}

// A function that will return items in an array with 6 or more
// characters

const filterArray = (array) => {
    const result = array.filter(word => word.length > 6)
    return result;
}

// Convert a number to a string

const numToString = (num) => {
    return num.toString();
}

//Display the correct planet with the number order it is away from the sun

const planet = (num) => {
    if (num < 8 && num > 0) {
        const planetOrder = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        return planetOrder[num - 1];
    } else {
        return ("Invalid option");
    }
}

// Count the amount of students present in the class. With an array or boolean values, count how many students are present

const numOfStudents = (array) => {
    const result = array.filter(word => word === true);
    return result.length;
}

// Square every digit and concatenate them (must return an integer). (squareDigi(34) will return 916)

const squareAll = (num) => {
    //Convering number to string. Then split separates the digits into an array
    let numArray = num.toString().split("");
    //Squaring each number in the array
    numArray = numArray.map(x => x ** 2);
    //Joining the numbers back together and converting it back to the integer data type
    let result = Number(numArray.join(""));
    return result;
}

// Given a year return back the century it is in (century(1705) //will return 18)
const century = (year) => {
    return Math.ceil(year/100);
}

//With an array of ones and zeroes, convert the equivalent binary value to an integer. binary([0, 0, 0, 1]) will return 1) binary([0, 1, 0, 0]) will return 4)

const binary = (array) => {
    binaryString = array.join("");
    num = parseInt(binaryString, 2);
    return num;
}

module.exports = {add, myArray, truthy, createUser, filterArray, numToString, planet, numOfStudents, squareAll, century, binary};