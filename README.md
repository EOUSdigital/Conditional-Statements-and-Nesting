# Module 5 – Lesson 02: Conditional Statements and Nesting
## ✅ Step 1 – 3: Core Concepts, Examples, and Quiz

---

## 🧠 Step 1: Explore the Topic

### What Are Conditional Statements?
Conditional statements allow your code to make decisions. These are core control flow tools:

- `if` – runs code if the condition is true
- `else if` – adds alternate conditions
- `else` – runs when all previous conditions are false
- Nested conditionals – place one `if` inside another

### Why It Matters
Without conditional logic, programs can't respond to different inputs, user actions, or system states. This is what makes code dynamic and smart.

---

## 🌍 Step 2: Real-World Examples

### 1. Handwashing Reminder
```javascript
if (time === 'before dinner') {
  console.log("Don't forget to wash your hands!");
}
```

### 2. Grading System
```javascript
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

### 3. Weather + Fuel-Based Driving Decision
```javascript
if (weather === 'clear') {
  if (fuelLevel > 50) {
    console.log("Go for a drive!");
  } else {
    console.log("Refuel first.");
  }
} else {
  console.log("Better stay home.");
}
```

### 4. Discount Eligibility
```javascript
if (isMember) {
  if (total >= 100) {
    console.log("You get 15% off!");
  } else {
    console.log("You get 10% off!");
  }
}
```

---

## ✅ Step 3: Quiz Summary

**Score Achieved: 9/10**

| # | Question Type | Your Answer | Correct | Notes |
|--|---------------|-------------|---------|-------|
| 1 | Multiple Choice | A | ❌ C | else runs if `if` is false, not another condition |
| 2 | Multiple Choice | B | ✅ | |
| 3 | Multiple Choice | A | ✅ | |
| 4 | Multiple Choice | D | ✅ | |
| 5 | Multiple Choice | B | ✅ | |
| 6 | True/False | False | ✅ | |
| 7 | True/False | True | ✅ | |
| 8 | True/False | True | ✅ | |
| 9 | True/False | False | ✅ | |
| 10 | True/False | True | ✅ | |

---

## 🧾 Summary

This lesson covered how to:
- Write and evaluate conditional blocks
- Nest logic to handle more complex cases
- Use control flow to simulate real-life decision-making
- Avoid pitfalls like excessive nesting or improper logic evaluation

These skills are essential for writing flexible, interactive programs.
