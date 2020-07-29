
function get_total(){
if (ie4){
while (eval("document.all.content"+totalcontent))
totalcontent++
}
else{
while (document.getElementById("content"+totalcontent))
totalcontent++
}
}

function contract_all(){
for (y=0;y<totalcontent;y++){
	document.getElementById("content"+y).style.display="none"
	yPlusOne = y+1;
	document.getElementById("featurelink" + yPlusOne + "image").src = "/images/navbar" + yPlusOne + "-off.png";
	}
}

function expand_one(which){
contract_all()
whichPlusOne = which+1;
document.getElementById("featurelink" + whichPlusOne + "image").src = "/images/navbar" + whichPlusOne + "-on.png";
document.getElementById("content"+which).style.display="block";
}

function content_advance() {
	if (running) {
		curindex=(curindex<totalcontent-1)? curindex+1: 0
		display_content()
	}
}

function display_content() {
	if (running) {
		get_total();
		contract_all();
		expand_one(curindex);
		timingvar = setTimeout("content_advance()", rotation_timer);
	}
	else {
		running=true;
		display_content();
		// the following line was used to toggle the play/stop button 
		//document.getElementById("div1").innerHTML='<a href="#" name="link4" onclick="stop_content()"><img src="//media.highlights.com/img-parents-slideshownav/Stop.gif" name="Image2" alt="Stop Slideshow"></a>'
	}
}

function stop_content() {
	if (running) {
	running=false
	// the following line was used to toggle the play/stop button 
	// document.getElementById("div1").innerHTML='<a href="#" name="link3" onclick="display_content()"><img src="http://media.highlights.com/img-parents-slideshownav/Play.gif" name="Image1" alt="Play Slideshow"></a>'
	}
}

function display_next() {
	stop_content()
	get_total()
	contract_all()
	next_calc()
	expand_one(curindex)
}

function display_previous() {
	stop_content()
	get_total()
	contract_all()
	previous_calc()
	expand_one(curindex)
}

function display_this(theOneToDisplay) {
				//alert("running display_this; theOneToDisplay is: " + theOneToDisplay);
	stop_content();
	clearTimeout(timingvar);
	contract_all();
				//alert("running display_this; curindex is: " + curindex);
				//alert("running display_this; totalcontent is: " + totalcontent);
	if (curindex >= 0 || curindex < totalcontent) {
		//alert("curindex is now: " + curindex);
		curindex = theOneToDisplay;
	} else {
	//alert("it didn't work right");
	curindex = 0;
	}
	expand_one(curindex);
	timingvar = setTimeout("display_content()", rotation_timer); // After a set period, start up again with display_content
}

function next_calc(){
	curindex=curindex+1
	if (curindex==3) {
	curindex=0
	}
}

function previous_calc() {
	curindex=curindex-1
	if (curindex==-1) {
	curindex=2
	}
}


function doImagePreload() {
   preloadImages(the_images);
}


function preloadImages(the_images_array)
{
   for(var loop = 0; loop < the_images_array.length; loop++)
   {
	var an_image = "an_image"+loop;
	var an_image = new Image();
	an_image.src = the_images_array[loop];
	//alert("loading: " + an_image.src);
   }
   //alert("array is: " + the_images);
}

function initFeatureRotation() {
	doImagePreload();
	display_content();
}