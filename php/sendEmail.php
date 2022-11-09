<?php

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Configure JSON response
$response = [
   "top_err" => "",
   "top_success" => "",
   "nom_err" => "",
   "mail_err" => "",
   "message_err" => "",
   "extra" => ""
];

$mail = new PHPMailer(true);
$mail->isSMTP();

try {
   $mail->Host = $_SERVER["HTTP_PHP_MAILER_HOST"];
   $mail->Port = $_SERVER["HTTP_PHP_MAILER_PORT"];
   $mail->Username = $_SERVER["HTTP_PHP_MAILER_USERNAME"];
   $mail->Password = $_SERVER["HTTP_PHP_MAILER_PASSWORD"];
   $mail->addReplyTo = $decoded["mail"];
   $mail->SMTPSecure="tls";
   $mail->SMTPOptions = array(
      'ssl' => array(
      'verify_peer' => true,
      'verify_depth' => 3,
      'verify_peer_name' => true,
      'allow_self_signed' => true
      )
      );
   $mail->SMTPAuth = true;
} catch (Exception $e) {
   $response["top_err"] = "Aïe, une erreur ! Les variables d'environnement n'ont pas été trouvées.";
   exit(json_encode($response));
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER['CONTENT_TYPE']) : "";

if ($contentType == "application/json") {
   $content = trim(file_get_contents(("php://input")));
   // Convert content into PHP Array
   $decoded = json_decode($content, true);
   if (is_array($decoded)) {
      // Sanitize Input Data
      foreach ($decoded as $name => $value) {
         $decoded[$name] = trim(filter_var($value, FILTER_SANITIZE_SPECIAL_CHARS));
      }
      // Error checking
      if (empty($decoded["mail"])) {
         $response["mail_err"] = "Erreur. Ce champ doit être rempli.";
      } else if (!filter_var($decoded["mail"], FILTER_VALIDATE_EMAIL)) {
         $response["mail_err"] = "Erreur. Veuillez rentrer une adresse email valide.";
      }
      if (empty($decoded["nom"])) {
         $response['nom_err'] = "Erreur. Ce champ doit être rempli.";
      }
      if (empty($decoded["message"])) {
         $response['message_err'] = "Erreur. Ce champ doit être rempli.";
      }
      // Can't send the email if we already have a response to show
      foreach ($response as $type) {
         if (!empty($response[$type])) {
            exit(json_encode($response));
         }
      }
      // Send email
      try{
         $mail->Subject = $decoded["nom"];
         $mail->CharSet = "utf-8";
         $mail->isHTML(true);
         $mail->Body = "<h4>Envoyé par : ".$decoded["mail"]."</h4><br><p>".$decoded["message"]."</p>";
         $mail->Sender = $decoded["mail"];
         $mail->addAddress("hombert.fabien@gmail.com");

         $mail->send();
      }catch(Exception $e) {
         $response["top_err"] = "Aïe, une erreur ! Le corps du message est mal rédigé.";
         $response["extra"] = $mail->send();
         exit(json_encode($response));
      }
      // Success response
      $response["top_success"] = "Merci de votre message, je vous répondrai sous peu !";
      exit(json_encode($response));
   }
}

$response["top_err"] = "Aïe, une erreur ! Vous pouvez réessayer, c'est une chance sur deux.";
exit(json_encode($response));
