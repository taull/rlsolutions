<?php
/* Set e-mail recipient */
$myemail  = "ben@rlsolve.com, jay@rlsolve.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['yourname'], "Enter your name");
$email    = check_input($_POST['email'], "Enter your email");
$details  = check_input($_POST['details']);
$phone    = check_input($_POST['phone'], "Enter a number we can reach you at");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

$subject = "RL Application: $yourname";

/* Let's prepare the message for the e-mail */
$message = "RL Solutions,

The following candidate has applied for a job in Sales & Consulting:

Name: $yourname
E-mail: $email
Phone: $phone

Cover Letter: 

$details

*End of message
**Please do not respond to this email

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: success-v2.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>