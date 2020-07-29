<?php

//
require_once 'appinclude.php';

echo '<h1 style="padding-bottom:10px;">Click and Play Hidden Pictures<sup>&reg;</sup></h1>';

echo '<div id="iframeLinkDiv"><a clicktohide="iframeLinkDiv" onClick="outside_location.setInnerFBML(link_1);" style="cursor: pointer;"><img src="http://media.highlights.com/public/hfc/highlights/facebook/images/fourthJuly-start-bt.gif" border="0" alt="Play Click and Play Hidden Pictures" /></a></div>';

echo '<div id="outside_location"></div>';

echo '<fb:js-string var="link_1">';

echo '<iframe height="490px" allowTransparency="true" frameborder="0" scrolling="no" style="width:684px; border:none" src="http://media.highlights.com/public/hfc/highlights/facebook/flash/fourthJuly/fourthJuly.html">';

echo '</iframe>';

echo '</fb:js-string>';

echo '<script type="text/javascript" charset="utf-8">var outside_location = document.getElementById("outside_location");</script>';

echo '<div style="height:10px; border-bottom:1px solid black; padding:10px 0px;"></div>';

echo '<h1 style="margin-top:20px;">Printable Hidden Pictures<sup>&reg;</sup></h1><p style="width:600px;">Print out and share <em>Hidden Pictures</em> puzzles you can do anywhere!</p>';

echo '<div><a href="http://www.highlightskids.com/GamesandGiggles/HiddenPics/HiddenPicsPrintable/HP1015_mowingLawn.asp" target="_blank"><img src="http://media.highlights.com/public/hfc/highlights/facebook/images/printableHP-mowingthelawn.gif" border="0" width="342" height="460" alt="Printable Hidden Pictures puzzle" /</a></div>';

echo '<p style="width:600px;">Click the image above for a version you can print and share!</p>';

?>

