// Declaring a constant variable for the city, which cannot be reassigned
const city = "baripada"; // city is "baripada" and cannot be changed

// Declaring a variable 'name' using 'let', which can be reassigned later
let name = "akash"; // Initial value for name is "akash"

// Declaring a variable 'course' using 'var', which has function scope and can be reassigned
var course = "bca"; // Initial course is "bca"

// A simple conditional statement that always evaluates to true
if (1 == 1) {
    // Reassigning values to 'name' and 'course' within the if block
    name = "Hiralal"; // 'name' changes from "akash" to "Hiralal"
    course = "MBA"; // 'course' changes from "bca" to "MBA"
}

// Using console.table to display the values in a tabular format in the console
console.table([city, name, course]); // Outputs city, name, and course values


/* 
Learning Points from the Code

    Variable Declaration and Types:
        const: Used for declaring variables with constant values. Once assigned, these values cannot be changed. In this code, city is a constant.
        let: Allows reassignment of variables within the same scope. It’s block-scoped, so it is limited to the code block where it is defined. In this code, name is initially set to "akash" but is later reassigned within the if block.
        var: An older way to declare variables, it is function-scoped (not block-scoped), meaning that var can be reassigned within the entire function or globally if outside a function. Here, course is initially "bca" but later changed within the if block.

    Conditionals:
        The if statement if (1 == 1) always evaluates to true, so the code inside this block will always execute. This is a basic example of how if statements work in JavaScript.

    Reassigning Variables:
        Since name was declared with let, it can be reassigned within the block.
        course, declared with var, can also be reassigned.

    Console Output:
        console.table() provides an easy-to-read tabular output format in the console, which can help visualize data in an organized way. Here, the values of city, name, and course are printed in a table.


*/