function toggleButton(divID) {
  var x = document.getElementById(divID);
  var galleryDivs = x.getElementsByClassName("nGY2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    resizeGalleries(galleryDivs);
  }
} 

function resizeGalleries(divs) {
	for (var i = 0; i < divs.length; i++) {
    	$(divs[i]).nanogallery2('resize');
    }
}