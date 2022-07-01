const app = require("../app.js");

describe("Should equal 5 when passed 2 and 3", () => {
    test("test1", () => {
        expect(app.add(2,3)).toBe(5);
    });
    
    test("test2", () => {
        expect(app.add(2,3)).toEqual(5);
    });

    //To make sure what is returned is not ‘null
    test("Check that the value is not null", () => {
        expect(app.add(2,3)).not.toBe(null);
    });
});

test("should contain Stuart", () => {
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

describe("Check that if both paramaters are equal, the function returns true. If not, then returns false", () => {

    test("Testing if the function returns true for equal values", () => {
        expect(app.areTheyEqual(2,2)).toEqual(true);
    });

    test("Testing if the function returns false for non-equal values", () => {
        expect(app.areTheyEqual(3,5)).toEqual(false);
    });
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
    // expect(app.numToString(5)).toEqual(expect.any(String));
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
