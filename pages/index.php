<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $contact = $_POST['contact'];
    $code = $_POST['code'];

    if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
        $to = $contact;
        $subject = "Verification Code - PaZhong Automation Staff";
        $message = "Hi $to,\n\nWe have received the email from you. Copy the following code to verify your account in order to get 30-day free trial:\n\n$code\n\nRegards,\nPaZhong Automation Staff";
        $headers = "From: no-reply@pazhong.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully.";
        } else {
            echo "Email sending failed.";
        }
    } else {
        echo "Please enter a valid email address.";
    }
}
?>
