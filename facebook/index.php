<?php

//
require_once 'appinclude.php';

echo '<div id="iframeLinkDiv"><a clicktohide="iframeLinkDiv" onClick="outside_location.setInnerFBML(link_1);" style="cursor: pointer;"><img src="http://www.studioadam.com/images/port02sticky2.png" border="0" alt="Photobucket" /></a></div>';

echo '<div id="outside_location"></div>';

echo '<fb:js-string var="link_1">';

echo '<iframe height="660px" allowTransparency="true" frameborder="0" scrolling="yes" style="width:760px; border:none" src="http://www.ebay.com">';

echo '</iframe>';

echo '</fb:js-string>';

echo '<script type="text/javascript" charset="utf-8">var outside_location = document.getElementById("outside_location");</script>';



echo '<div id="iframeLinkDiv2"><a clicktohide="iframeLinkDiv2" onClick="outside_location2.setInnerFBML(link_2);" style="cursor: pointer;"><img src="http://www.studioadam.com/images/port02sticky1.png" border="0" alt="Photobucket" /></a></div>';

echo '<div id="outside_location2"></div>';

echo '<fb:js-string var="link_2">';

echo '<iframe height="660px" allowTransparency="true" frameborder="0" scrolling="yes" style="width:760px; border:none" src="http://www.highlights.com">';

echo '</iframe>';

echo '</fb:js-string>';

echo '<script type="text/javascript" charset="utf-8">var outside_location2 = document.getElementById("outside_location2");</script>';
?>

