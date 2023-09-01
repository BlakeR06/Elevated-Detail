const scheduleNowButton = document.getElementById('scheduleNow');
const car = document.getElementById('movingCar');

let currentMarginLeft = -350;
let isMovingRight = true;

scheduleNowButton.addEventListener('click', function() {

    const targetMarginLeft = 1000;
    const increment = 10;

    const interval = setInterval(function() {
        if (isMovingRight) {
            if (currentMarginLeft >= targetMarginLeft) {
                isMovingRight = false;
            } else {
                currentMarginLeft += increment;
            }
        } else {
            if (currentMarginLeft <= 20) {
                isMovingRight = true;
            } else {
                currentMarginLeft -= increment;
            }
        }
        car.style.marginLeft = currentMarginLeft + 'px';

        if (!isMovingRight && currentMarginLeft <= 20) {
            clearInterval(interval);
        }
    }, 10);

});