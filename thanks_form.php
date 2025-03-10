<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phoneNumber = $_POST["phoneNumber"];
	$to = "support@" . $_SERVER['HTTP_HOST'];
    $subject = "New Contact Form Submission";
    $body .= "Phone Number: $phoneNumber\n";
    $headers = "From: $to \r\n";
    mail($to, $subject, $body, $headers);
    // Redirect to thank you page
    header("Location: thanks.html");
    exit();
}
?>
