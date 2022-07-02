const app = require("../app.js");

describe("Should equal 5 when passed 2 and 3", () => {
    test("Testing using toBe", () => {
        expect(app.add(2,3)).toBe(5);
    });
    
    test("testing using toEqual", () => {
        expect(app.add(2,3)).toEqual(5);
    });

    //To make sure what is returned is not ‘null'
    test("Check that the value is not null", () => {
        expect(app.add(2,3)).not.toBe(null);
    });
});

//Testing if an array contains a certain value

it("should contain Stuart", () => {
    expect(app.myArray()).toContain("Stuart");
    });


//A value that is truthy. A value that is not falsy.

describe("Check that the value is truthy", () => {

    test("Is it truthy?", () => {
        expect(app.truthy()).toBeTruthy();
    });

    test("Is it not falsy?", () => {
        expect(app.truthy()).not.toBeFalsy();
    });
});

//Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function

test("Testing that the object properties match the given parameters", () => {
    expect(app.createUser("John","Smith")).toEqual({ firstname: "John", lastName: "Smith" });
});

//A function that will return items in an array with 6 or more characters

describe("Testing if the function only returns elements from the array with a char length greater than 6", () => {

    test("Returning two correct values from an array", () => {
        expect(app.filterArray(["desk", "drawers", "bed", "wallpaper"])).toEqual(["drawers", "wallpaper"]);
    });

    test("Returning an empty array because no values meet the criteria", () => {
        expect(app.filterArray(["desk", "draw", "bed", "wall"])).toEqual([]);
    });
});

//Convert a number to a string

test("Checking the returned result is a string", () => {
    expect(app.numToString(5)).toEqual("5");
});


//Display the correct planet with the number order it is away from the sun

describe("Display the correct planet with the number order it is away from the sun", () => {

    test("Testing a valid option", () => {
        expect(app.planet(2)).toBe("Venus");
    });

    test("Testing an invalid option", () => {
        expect(app.planet(10)).toBe("Invalid option");
    });
});

// Count the amount of students present in the class. With an array or boolean values, count how many students are present

test("Function should return the total amount of 'true' in the given array", () => {
    expect(app.numOfStudents([true, false, true, true, false, true, false])).toBe(4);
});

//Square every digit and concatenate them (must return an integer).

test("Square every digit and concatenate them", () => {
    expect(app.squareAll(52)).toBe(254);
});

// Given a year return back the century it is in. century(1705) will return 18

describe("Given a year return back the century it is in", () => {

    test("Testing a small year", () => {
        expect(app.century(12)).toBe(1);
    });

    test("Testing a borderline year", () => {
        expect(app.century(1900)).toBe(19);
    });

    test("Testing a non-borderline year", () => {
        expect(app.century(1675)).toBe(17);
    });
});

//With an array of ones and zeroes, convert the equivalent binary value to an integer.

describe("With an array of ones and zeroes, convert the equivalent binary value to an integer", () => {

    test("Testing the binary for 1", () => {
        expect(app.binary([0,0,0,1])).toBe(1);
    });

    test("Testing the binary for 4", () => {
        expect(app.binary([0,1,0,0])).toBe(4);
    });
});