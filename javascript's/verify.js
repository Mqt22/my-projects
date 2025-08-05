function sendCode() {
    const boxes = document.querySelectorAll('.grid-4boxes .box');
    const code = Math.floor(1000 + Math.random() * 9000).toString(); // e.g., "3066"

    boxes.forEach((box, i) => {
        box.textContent = code[i];
    });

    // Optional: Also send code to backend via AJAX
    sendCodeToEmail(code);
}

function sendCodeToEmail(code) {
    const email = document.querySelector('.email-dis').textContent;
    
    fetch('send-code.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`
    })
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));
}
