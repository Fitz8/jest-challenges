const add = (num1, num2) => {
    return num1 + num2;
}

const myArray = () => {
    return ["Ben", "Stuart", "Katie"];
}

//A value that is truthy. A value that is not falsy.

const truthy = () => {
    return 1;
}

// Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function

const areTheyEqual = (prop1, prop2) => {
    console.log(prop1 === prop2);
    return prop1 === prop2;
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

module.exports = {add, myArray, truthy, areTheyEqual, filterArray, numToString, planet, numOfStudents};