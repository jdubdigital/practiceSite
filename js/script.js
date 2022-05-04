const practiceFunctions = () => { // The overall function

    let varOne = 5;
    let varTwo = 10;
    let varFour = "Hi, my name is";
    let varFive = "Joe.";

    //Practice Function 1
    function functionOne(option1, option2) {
        if (option1 === 10 && option2 === 20) {
            console.log("Yes, they match.");
        } else if (option1 != 10 && option2 != 20) {
            console.log("Doesn't match");
            return;
        }
    }

    //Practice Function Two
    function functionTwo(valOne) {
        if (valOne === varOne) {
            console.log("Val is equal to varOne");
        }
    }

    //Practice Function Three
    function functionThree(valTwo, valThree) {
        if (valTwo === varTwo && valThree != varTwo) {
            console.log("Val2 is equal, val3 is not");
        } else if (valTwo === varTwo && valThree === varTwo) {
            console.log("Both are equal");
            return;
        }
    }

    //Practice Function Four
    function functionFour() {
        console.log(`${varFour} Joe.`); //Calling variables inside backticks
        console.log(`${varFour} ${varFive}`); //Calling variables inside backticks
    }

    //Practice Function Five - Function Within A Function
    function functionFive() {
        function insideFunction(option1, option2) {
            if (option1 === 10 && option2 === 20) {
                console.log("Yes, they match.");
            } else if (option1 != 10 && option2 != 20) {
                console.log("Doesn't match");
                return;
            }
        }
        insideFunction(10, 20); // Function called inside of the function
    }

    functionOne(10, 20);
    functionTwo(5);
    functionThree(10, 10);
    functionFour();
    functionFive();

};

practiceFunctions();
