<?php
require_once ('../src/facebook.php');

// *** Add your Facebook API Key, Secret Key here ***
$appapikey = 'c8aa0c68eabe4f8945f8fb46009de8c8';
$appsecret = '2309b04c1c6956bdc83c5cfa34421390';
$facebook = new Facebook($appapikey, $appsecret);
// $user_id = $facebook->require_login();

?>

