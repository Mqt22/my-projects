document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("contact");
    const email = emailInput.value;

    if (!email || !email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        return;
    }

    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log("Generated Code:", otp); // 👈 See it here

    // Assign code to hidden input
    document.getElementById("code").value = otp;

    // Optionally alert it or send it to PHP
    alert("OTP Generated (test only): " + otp);
});
