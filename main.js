const scheduleNowDiv = document.getElementById('scheduleNow');

scheduleNowDiv.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    setTimeout(function() {
        // Navigate to the link after the delay
        window.location.href = 'scheduleNow.html';
    }, 1000); // Delay in milliseconds (5000ms = 5 seconds)
});