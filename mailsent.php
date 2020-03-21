<?php 
if(!isset($_POST['name'])) echo '<script>window.location = "index.htm";</script>';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$recipient = 'rentpersonligt@gmail.com';
$subject = 'Meddelande från rentpersonligt.com';
$parsedmessage = "Från: $name \n\n $message \n\n (Avsändares kontaktuppgifter) \n E-Post: $email";

$headers = "From: " .$name. " <" .$email. ">" . " \r\n" . 
           'Reply-To: ' .$email ." \r\n" .
           "X-Mailer: PHP/" .phpversion();

if ( mail($recipient, $subject, $parsedmessage, $headers) ) {
  $header = "Tack!";
  $message = 'Ditt meddelande har skickats.';
} else {
  $header = "Tyvärr";
  $message = 'Ingen kommunikation med mailservern. Försök igen eller testa senare.';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Städ för Hem och Företag - RENT PERSONLIGT</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="contact__window" class="contact__window" style="opacity: 1; z-index: 1;">  
    <div class="content">
      <div class="content__row">
        <div class="content__col">
          <div class="row">
            <h1 class="display__2"><?php echo $header; ?></h1>
          </div>
          <div class="content__col" style="margin-bottom: .5em">
            <p class="size__3"><?php echo $message; ?></p>
          </div>
          <div class="content__col" style="margin-bottom: 3em">
            <p class="size__3">Klicka <a href="index.htm">här</a> för att komma tillbaka till sidan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>