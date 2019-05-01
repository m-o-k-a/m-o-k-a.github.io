<?php
	//THROW ELEMENT FROM HTML
  	$name = $_POST['name'];
  	$senderEmail = $_POST['email'];
  	$messageObject = $_POST['object'];
  	$message = $_POST['message'];

  	//COMPOSE MESSAGE
    $emailFrom = "eddy.ikhlef@protonmail.com";
    $emailSubject = "[FROM: MY WEBSITE] $messageObject";
    $emailBody = "<You have received a new message from the user $name ($senderEmail).>\n". "$message".
    $headers = "message from your personnal website"

    //SEND THE MESSAGE
    mail($emailFrom,$emailSubject,$emailBody,$headers);
?>
