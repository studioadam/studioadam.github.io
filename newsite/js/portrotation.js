function change_portimage(which) {
	// first, turn all buttons to 'off'
	for (y=1;y<=totalportcontent;y++){
		document.getElementById("portlink" + y + "image").src = "http://www.studioadam.com/2010redesign/images/square" + y + "bt-off.gif";
	}
	
	var thisPortlinkImage = "portlink" + which + "image";
	var thisPortlinkImageSrc = "http://www.studioadam.com/2010redesign/images/square" + which + "bt-on.gif"
	var thisPortImageLargeSrc = "http://www.studioadam.com/2010redesign/images/" + whichPortSet + "-" + which + ".jpg";
	
	// swap out the large port image for the correct one
	document.getElementById(thisPortlinkImage).src = thisPortlinkImageSrc;
	document.getElementById("portimagelarge").src = thisPortImageLargeSrc; 
	
}

function portcontent_advance() {
	if (portrunning) {
		if (curportindex<totalportcontent) {
			curportindex = curportindex+1;
		}
		else {
			curportindex = 1;
		}
		//alert("curportindex is now: " + curportindex);
		//curportindex=(curportindex<totalportcontent-1)? curportindex+1: 0
		display_portcontent()
	}
}

function display_portcontent() {
	//alert("display_portcontent is starting");
	if (portrunning) {
	//alert("portrunning=true");
		//contract_allport();
		//expand_oneport(curportindex);
		change_portimage(curportindex);
		porttimingvar = setTimeout("portcontent_advance()", portrotation_timer);
	}
	else {
		portrunning=true;
		display_portcontent();
	}
	//alert("i finished display_portcontent");
}

function stop_portcontent() {
	stopTimer();
	if (portrunning) {
	portrunning=false;
	}
}

function stopTimer()
{
clearTimeout(portrotation_timer);
}

function display_thisport(theOneToDisplay) {
	stop_portcontent();
	clearTimeout(porttimingvar);
	if (curportindex >= 1 || curportindex <= totalportcontent) {
		curportindex = theOneToDisplay;
	} else {
	curportindex = 1;
	}
	change_portimage(curportindex);
	porttimingvar = setTimeout("display_portcontent()", portrotation_timer); // After a set period, start up again with display_portcontent
}

function beginwith_thisport(theOneToDisplay) {
	stop_content(); // stops original content rotation, now in the background behind this 'window'
	porttimingvar = setTimeout("display_portcontent()", 1000); // After a second, begin sequence with display_portcontent
}


function doPortImagePreload() {
   preloadPortImages(the_portimages);
}


function preloadPortImages(the_portimages_array)
{
	//alert("preloadPortImages is starting");
   for(var loop = 0; loop < the_portimages_array.length; loop++)
   {
	var an_image = "an_image"+loop;
	var an_image = new Image();
	an_image.src = the_portimages_array[loop];
   }
}

function initPortRotation() {

	doPortImagePreload();
	display_portcontent();
}


