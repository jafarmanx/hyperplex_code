const track = document.querySelector('.image-track');
const images = document.querySelectorAll('.image-track img');

console.log(track.dataset)

window.onmousedown = function(e) {
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = function(e) {
    track.dataset.mouseDownAt = 0;
    track.dataset.prevPercentage = track.dataset.storepercent;
}

window.onmousemove = function(e) {
    if (track.dataset.mouseDownAt === "0") return;
    const mouseDelta = e.clientX - parseFloat(track.dataset.mouseDownAt);
    const maxDelta = window.innerWidth/2;
    const percentage = (mouseDelta / maxDelta) * 100;
    const nextPercentage = Math.floor(parseFloat(track.dataset.prevPercentage) + percentage);
    track.dataset.storepercent = nextPercentage;
    
    track.animate({
        transform: `translateX(${nextPercentage}%)`
    },{duration: 1200, fill: 'forwards'});
    //track.style.transform = `translateX(${nextPercentage}%)`;
    
    images.forEach(image => {
            image.animate({
                objectPosition: `${nextPercentage + 50}% 50%`
            },{duration: 1200, fill: 'forwards'});
            //image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    })
        
}





