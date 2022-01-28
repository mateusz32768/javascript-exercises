<?php # login.php

if ( isset($_POST['email'], $_POST['password']) 
    && ($_POST['email'] == 'test@przyklad.pl') 
    && ($_POST['password'] == 'hasło') ) {
		echo 'OK';
} else {
	echo 'BŁĄD';
}
?>