// Initial score as a string
let score = "1234";
console.log(typeof score); // Output: "string", as score is initially a string

// Converting the string score to a number using Number()
let value = Number(score);
console.log(typeof value); // Output: "number", since Number() successfully converts "1234" to a numeric type

// Trying to convert a string with non-numeric characters to a number
let newScore = "1234abc";
console.log(typeof newScore); // Output: "string", as newScore is still a string

// Converting newScore to a number
let newValue = Number(newScore);
console.log(typeof newValue); // Output: "number", since Number() tries to convert newScore to a number
console.log(newValue);        // Output: NaN (Not-a-Number), because "1234abc" cannot be fully converted to a valid number



/*
Explanation of the Output

The output, step-by-step:

    typeof score: "string" – The variable score is initially a string ("1234").
    typeof value: "number" – The Number() function successfully converts "1234" to the numeric value 1234, changing the type from string to number.
    typeof newScore: "string" – newScore is a string ("1234abc").
    typeof newValue: "number" – Even though "1234abc" includes non-numeric characters, Number() returns a numeric type, but the conversion fails, resulting in NaN (Not-a-Number).
    newValue: NaN – Since "1234abc" can’t be converted into a valid number, Number() returns NaN.

Learning Points

    Type Conversion in JavaScript:
        Number(): A built-in function to convert a value to a number, useful when dealing with numeric strings like "1234". If the string contains non-numeric characters, the result is NaN.

    NaN (Not-a-Number):
        NaN is a special numeric value returned when a conversion to number fails.
        It has a numeric type (typeof NaN is "number"), which can sometimes cause unexpected behavior in calculations if not handled properly.

    Use of typeof:
        typeof is a helpful operator to check the type of a variable before and after type conversions, useful for debugging and verifying data types in your code.

    Data Validation:
        When converting strings to numbers, especially user input, it’s important to validate data to avoid unexpected NaN results. JavaScript offers functions like parseInt() and parseFloat() which can sometimes handle partial numeric conversions more flexibly than Number().

*/