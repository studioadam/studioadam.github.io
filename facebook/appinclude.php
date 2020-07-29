<?php
require_once ('src/facebook.php');

// *** Add your Facebook API Key, Secret Key here ***
$appapikey = '1e1ff6d26b7e5c8ae5df4a3fda08a006';
$appsecret = 'eb7118cd1ff379b407eb70b60e2a557a';
$facebook = new Facebook($appapikey, $appsecret);
// $user_id = $facebook->require_login();

?>

