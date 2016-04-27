<?php

$name = $_POST ['name'];
$request = $_POST ['request'];

$to = "aull.taylor@gmail.com";
$subject = "Rate Request";
$body = "This is an automated message. Please do not reply to this message."

mail ($to,$subject,$body);

echo "Message Sent!";

?>