// Stack Memory Example with Primitive Types
let a = 5;              // `a` is stored in the stack
let b = a;              // `b` is a separate copy of `a` in the stack
b = 10;                 // Changing `b` doesn’t affect `a`

console.log("Stack Example (Primitives):");
console.log("a:", a);   // Outputs: 5
console.log("b:", b);   // Outputs: 10
// Explanation: `a` and `b` are stored separately in the stack, so changing `b` doesn’t change `a`

// Heap Memory Example with Reference Types
let person = { name: "Akash" }; // `person` object is stored in heap memory
let anotherPerson = person;     // `anotherPerson` points to the same object in the heap

anotherPerson.name = "Hiralal"; // Changing `name` through `anotherPerson` also affects `person`

console.log("\nHeap Example (Reference Types):");
console.log("person:", person);         // Outputs: { name: "Hiralal" }
console.log("anotherPerson:", anotherPerson); // Outputs: { name: "Hiralal" }
// Explanation: Both `person` and `anotherPerson` reference the same object in the heap, so changes affect both

// Example of Garbage Collection
let tempObject = { data: "Temporary" }; // `tempObject` is stored in heap memory
tempObject = null;                      // Removing the reference, making the object unreachable

console.log("\nGarbage Collection Example:");
console.log("tempObject:", tempObject);  // Outputs: null
// Explanation: The original object becomes unreachable, so JavaScript will clean it up (garbage collection)

/*

1. Stack Memory

The Stack is a simple, fast memory structure used for storing primitive values (like numbers, strings, and booleans) and execution context for function calls. It operates on a Last In, First Out (LIFO) principle, meaning the last item added is the first to be removed.

    Characteristics:
        Fixed Size: Stack memory is limited in size.
        Faster Access: Accessing data from the stack is quicker compared to the heap.
        Primitive Data Storage: Stores primitive data types (number, string, boolean, etc.) directly by value.
        Function Execution Context: Each function call has its own stack frame that holds the function’s local variables and is removed when the function execution completes.

    Example:

    javascript

    let a = 10;      // Stored in the stack (primitive value)
    let b = a;       // A new copy of `a` is created in `b`, independent of `a`

2. Heap Memory

The Heap is a large, more flexible memory structure used to store objects and reference types (such as arrays and functions). Objects are stored in heap memory and are referenced by pointers stored in the stack.

    Characteristics:
        Dynamic Size: The heap is larger and dynamically allocated.
        Slower Access: Accessing heap memory is generally slower due to its unordered structure.
        Reference Data Storage: Objects, arrays, and functions are stored in the heap, with only their references (or memory addresses) stored in the stack.
        Garbage Collection: JavaScript’s engine uses garbage collection to free up unused memory in the heap, which optimizes memory usage.

    Example:

    javascript

    let obj = { name: "Akash" }; // `obj` is stored in heap memory, while its reference is stored in the stack
    let ref = obj;               // `ref` now points to the same heap memory location as `obj`
    ref.name = "Hiralal";        // Changes in `ref` also affect `obj` because they share the same reference

Key Concepts

    Primitive vs. Reference Types:
        Primitives (like numbers and strings) are stored directly in the stack.
        Reference Types (like objects and arrays) are stored in the heap, with a pointer/reference in the stack.

    Copying and Referencing:
        For primitive types: A copy of the value is created. Changing one does not affect the other.
        For reference types: Only the reference is copied. Modifying the data through one reference affects all references to that data.

    Garbage Collection:
        JavaScript's garbage collector automatically frees up memory in the heap that is no longer accessible, optimizing performance.




*/