// Declaring variables with different data types
let number = 1234;       // Number data type
let strings = "Hello";   // String data type
let booleans = true;     // Boolean data type
let special = null;      // Special value: null, representing "no value"
let ud = undefined;      // Undefined, meaning the variable has been declared but not assigned a value

// Displaying the data type of each variable in the console
console.log(typeof number);    // Outputs: "number"
console.log(typeof strings);   // Outputs: "string"
console.log(typeof booleans);  // Outputs: "boolean"
console.log(typeof special);   // Outputs: "object" (Note: this is a known quirk in JavaScript)
console.log(typeof ud);        // Outputs: "undefined"

// Displaying all types in a tabular format
console.table([
    { Variable: "number", Type: typeof number },
    { Variable: "strings", Type: typeof strings },
    { Variable: "booleans", Type: typeof booleans },
    { Variable: "special", Type: typeof special },
    { Variable: "ud", Type: typeof ud }
]);


/*
Learning Summary

    JavaScript Data Types:
        Number: Represents numeric values, both integers and floating-point numbers (e.g., 1234).
        String: A sequence of characters used to represent text (e.g., "Hello").
        Boolean: Logical values that are either true or false.
        Null: A special value representing "no value" or "empty." Though typeof null returns "object" (a JavaScript quirk), it is technically a distinct primitive type.
        Undefined: A variable is undefined when it has been declared but not assigned a value.

    Using the typeof Operator:
        The typeof operator determines the data type of a given variable.
        It returns a string indicating the type (e.g., "number", "string", "boolean", "object", "undefined").
        It's a helpful tool for debugging, especially when you need to confirm the type of variables dynamically.

    Handling Special Cases:
        The null type: Although null is its own type, typeof null returns "object", a known quirk in JavaScript dating back to its early days.
        The undefined type: Represents an uninitialized variable or an explicitly set undefined value.

    Output with Console Methods:
        console.log() is used to display individual values or types in the console, useful for step-by-step debugging.
        console.table() creates a table format, ideal for displaying structured data and comparing multiple variables’ types or values, making the output easy to read and interpret.

    Practical Use:
        Understanding data types is crucial for writing accurate conditions, functions, and calculations. Data types impact how variables interact with operators and methods, making this knowledge foundational for JavaScript programming.

*/