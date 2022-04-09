console.log('HELLO');

const test = () => {
	console.log('this is a test');
};

var controlsContainer = document.getElementById('controls-container'),
    allImages = document.querySelectorAll('.image'),
    imagesContainer = document.getElementById('images-container');


controlsContainer.onclick = function(e){
  var target = e.target,
      dataTarget = target.getAttribute('data-image'),      
      activeImage = document.getElementById(dataTarget);
  
  if(dataTarget){
    for( var i = 0; i < allImages.length; i++){
    allImages[i].removeAttribute('data-active');
  }
 
  activeImage.setAttribute('data-active', 'active');
  }  
}