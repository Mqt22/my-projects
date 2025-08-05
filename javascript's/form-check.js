document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Stop form from submitting by default

        const firstName = form.firstname.value.trim();
        const contact = form.contact.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.Confirmpassword.value.trim();
        const termsChecked = form.querySelector('input[type="checkbox"]').checked;

        if (!firstName || !contact || !password || !confirmPassword || !termsChecked) {
            alert("Please fill up the form to continue.");
            return;
        }

        if (password.length !== 8) {
            alert("Password must be exactly 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // If everything is fine
        alert("Form submitted successfully!");
        form.reset(); // Optional

        // Redirect after 1 second (to give time for the alert)
        setTimeout(() => {
            window.location.href = "Sign-up verification.html";
        }, 1000);
    });
});
