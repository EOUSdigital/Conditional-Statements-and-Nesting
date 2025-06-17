//TODO 📗 Module 5. Logic and Control Flow - Lesson 02.01: Conditional Statements and Nesting


//TODO  📝 Step 1: Explore the Topic

//* 🧩 What Are Conditional Statements?
//  Conditional statements allow your program to make decisions and run different blocks of code depending on whether a condition is true or false. This is how logic becomes dynamic.

//? 🔹 The if Statement

if (condition) {
    //  code runs if condition is true
}

//? 🔹 The if...else Statement

if (condition) {
    // run this if condition is true
} else {
    // run this if condition is false
}


//? 🔹 The else if Statement
//  Use when you have multiple conditions:

if (condition1) {
    //  do A
} else if (condition2) {
    //  do B
} else {
    // do C
}

//? 🔹 Nesting Conditionals
//  We can place one conditional inside another, but we must be cautious:

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Show admin panel");
    }
}

//! Too much nesting can lead to a “pyramid of doom.” It’s better to simplify when possible with &&, ||, or return early.

//* 🛠️ Why Use Conditional Statements?
//  • To evaluate input or user actions
//  • To handle error states
//  • To create interactive programs
//  • To apply rules, such as:
//      > “If score ≥ 90, grade is A”
//      > “If item is in stock, allow purchase”

//* ⚠️ Key Limitations and Considerations
//  • Only one branch runs per if/else if/else block.
//  • Order matters – conditions are checked in sequence.
//  • Be careful with equality operators (== vs ===)
//  • Avoid deeply nested code—it becomes hard to read.
//  • Always make sure each if handles clear, meaningful logic.

//* 📌 Summary
//? Keyword                     Purpose
//  if                          code if condition is true
//  else                        Runs code if all previous conditions were false
//  else if                     Adds more branches to the logic
//  Nested if                   Checks conditions inside conditions


//TODO  📝 Step 2: Real-World Examples

//  Conditional logic mirrors how we make decisions every day. Let’s walk through scenarios where conditional statements help a program act just like we would in real life.

//* 🧼 Example 1: Hand washing Reminder
//  If it is before dinner time, remind to wash hands.
//  Otherwise, no reminder needed.

if (time === 'before dinner') {
    console.log("Don't forget to wash your hands!");
} else {
    console.log("Enjoy your meal!");
}

//? 🧠 Real-world match: We decide to remind kids based on time of day.

//* 🎓 Example 2: Grading System
//  Assign a grade based on a student's score.

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
}   else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//? 🧠 Real-world match: This logic mimics how schools assign letter grades from percentages.

//* 🚘 Example 3: Driving Decision Based on Weather and Fuel
//  We decide whether to drive based on both the weather and fuel level.

if (weather === 'clear') {
    if (fuelLevel > 50) {
        console.log("Go for a drive!");
    } else {
        console.log("Refuel first.");
    }
} else {
    console.log("Better stay home.");
}

//? 🧠 Real-world match: This is a nested conditional, where both conditions must be considered.

//* 🧾 Example 4: Discount Eligibility
//  A store gives different discounts based on loyalty status and purchase total.

if (isMember) {
    if (total >= 100) {
        console.log("You get 15% off!");
    } else {
        console.log("You get 10% off!");
    }
} else {
    console.log("Sign up for a discount!");
}

//? 🧠 Real-world match: Stores use layered decisions to adjust deals for different customer types.

//* 🎯 Key Takeaway
//  These examples show how if, else if, and else allow us to handle different conditions logically—and how nesting lets us represent complex rules.


//TODO  📝 Step 3: Quiz: Conditional Statements and Nesting

//? 1. What does the else block do in an if/else structure?
//  A. It checks another condition
//  B. It runs if all previous conditions were true
//  C. It runs only if the first if condition is false
//  D. It always runs, no matter what

//! Answer: C

//? 2. What will this code output?

let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

//  A. A
//  B. B
//  C. C
//  D. F

//! Answer: B

//? 3. Which of the following is a valid way to nest conditionals?
//  A. if (x > 5) { if (y < 10) { ... } }
//  B. else (x === 5) { ... }
//  C. if (x === 5) else { ... }
//  D. if x = 5 then { ... }

//! Answer: A

//? 4. What’s the risk of deeply nested if statements?
//  A. They increase speed
//  B. They make code easier to read
//  C. They slow down the browser
//  D. They reduce readability and increase complexity

//! Answer: D

//? 5. Which condition is evaluated first?

if (temp > 30) {
    console.log("Hot");
} else if (temp > 20) {
    console.log("Warm");
} else {
    console.log("Cool");
}

//  A. temp > 20
//  B. temp > 30
//  C. temp === 30
//  D. none – all are evaluated at once

//! Answer: B

//* True or False

//  6. Every if statement must be followed by an else.
//! Answer: False

//  7. You can have multiple else if conditions in one block.
//! Answer: True

//  8. Nesting conditionals means putting an if statement inside another.
//! Answer: True

//  9. JavaScript will continue checking all else if conditions even if one is true.
//! Answer: False

//  10. if (a && b) checks if both a and b are true.
//! Answer: True
