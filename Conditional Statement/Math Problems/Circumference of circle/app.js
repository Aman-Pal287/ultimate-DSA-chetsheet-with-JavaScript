function circumferenceOfCircle(r) {
    let C = 2 * Math.PI * r;
    return C;
}

// Example use case
let radius = 7;
let C = circumferenceOfCircle(radius);

console.log("Circumference:", C.toFixed(2)); // 2 decimal places
