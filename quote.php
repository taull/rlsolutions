<?php
/* Set e-mail recipient */
$myemail  = "customerservice@rlsolve.com";

/* Check all form inputs using check_input function */
$company = check_input($_POST['company']);
$yourname = check_input($_POST['yourname'], "Enter your name");
$email    = check_input($_POST['email']);
$phone    = check_input($_POST['phone']);
$shipdate    = check_input($_POST['shipdate']);
$shipzip    = check_input($_POST['shipzip']);
$arrivedate    = check_input($_POST['arrivedate']);
$arrivezip    = check_input($_POST['arrivezip']);

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

$subject = "RL Rate Request Form";

/* Let's prepare the message for the e-mail */
$message = "RL Solutions, 

A potential client has submitted a request for a quote:

Company: $company
Name: $yourname
E-mail: $email
Phone: $phone

Shipping From: 

$shipzip on $shipdate

Arriving at:

$arrivezip on $arrivedate

End of message

**Please do not respond to this email**

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: success-v1.html');
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