const eyeRef = document.querySelectorAll('.eye');

// mousemove for devices with mouse and touchmove for touchcreen devices
let events = ['mousemove', 'touchmove'];

// check for touch screen
function isTouchDevice() {
    try{
        document.createEvent('TouchEvent');
        return true;
    }
    catch (e){
        return false;
    }
};

//Same function for both events
events.forEach((eventType) => {
    document.body.addEventListener(eventType, event => {
        eyeRef.forEach((eye) => {
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
            

            let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
            let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
        
            console.log(x, y);
            let radian = Math.atan2(x - eyeX, y - eyeY);

            let rotationDegrees = radian * (179 / Math.PI) * -1 + 179;
            //rotate the eye
            eye.style.transform = 'rotate(' + rotationDegrees + 'deg)';
         });
    });
});