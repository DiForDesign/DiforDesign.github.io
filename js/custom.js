function scrollToElement(x) {
        let e = document.getElementById(x);
        e.scrollIntoView({
          //block: 'start',
          behavior: 'smooth',
          //inline: 'start'
        });
      }

function expandImage(imageUrl) {
	
	var modalImage = document.getElementById("expandedImage");
	
	modalImage.src = imageUrl;
	$('#imageExpansion').modal("toggle");
	
}
