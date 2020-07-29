<!--
// copyright 1999 Idocs, Inc. http://www.idocs.com/tags/
// Distribute this script freely, but please keep this 
// notice with the code.

var rollOverArr=new Array();
function setrollover(OverImgSrc,pageImageName)
{
if (! document.images)return;
if (pageImageName == null)
    pageImageName = document.images[document.images.length-1].name;
rollOverArr[pageImageName]=new Object;
rollOverArr[pageImageName].overImg = new Image;
rollOverArr[pageImageName].overImg.src=OverImgSrc;
}

function rollover(pageImageName)
{
if (! document.images)return;
if (! rollOverArr[pageImageName])return;
if (! rollOverArr[pageImageName].outImg)
    {
    rollOverArr[pageImageName].outImg = new Image;
    rollOverArr[pageImageName].outImg.src = document.images[pageImageName].src;
    }
document.images[pageImageName].src=rollOverArr[pageImageName].overImg.src;
}

function rollout(pageImageName)
{
if (! document.images)return;
if (! rollOverArr[pageImageName])return;
document.images[pageImageName].src=rollOverArr[pageImageName].outImg.src;
}


function rolloversquarebt(pageImageName)
{
var squareLabelImgSrc = "images/square-label-" + pageImageName + ".gif";
var squareBt = "square" + pageImageName + "bt";
var squareBtImgSrc = "images/square" + pageImageName + "bt-on.gif";
setrollover(squareLabelImgSrc, 'square-label');
setrollover(squareBtImgSrc, squareBt);
rollover(squareBt);
rollover('square-label');
}

function rolloutsquarebt(pageImageName)
{
var squareBt = "square" + pageImageName + "bt";
rollout(squareBt);
rollout('square-label');
}

function changeImg(portNumber,imgNumber)
{
var ImgSrc = "images/" + portNumber + "-" + imgNumber + ".jpg";
if (! document.images)return;
document.images['portimagelarge'].src=ImgSrc;
}

//-->
