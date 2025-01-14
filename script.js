const audioElement = document.getElementById('music');
document.addEventListener("click", function(event) {
    if (event.target) {                
        audioElement.muted = false;
        audioElement.play();  
    }
});
