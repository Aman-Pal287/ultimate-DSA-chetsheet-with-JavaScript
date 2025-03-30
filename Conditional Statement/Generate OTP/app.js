function generateOTP(length) {
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 1); // 0 to 9  random digit
    }
    return otp;
}

// Example use case
let otpLength = 6; // 6-digit OTP generate
let otp = generateOTP(otpLength);

console.log("Generated OTP:", otp);
