// --- The Countdown Timer Logic ---

        // Set the date we're counting down to (Year, Month (0-11), Day, Hour, Minute, Second)
        const countdownDate = new Date("August 1, 2025 00:00:00").getTime();

        // Update the count down every 1 second
        const countdownFunction = setInterval(function() {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countdownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Add leading zeros if number is less than 10
            document.getElementById("days").innerText = days < 10 ? '0' + days : days;
            document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById("countdown").innerHTML = `<div style="font-size: 24px; font-weight: bold; color: var(--burnt-orange);">The Class Waitlist is Closed!</div>`;
                // Optionally disable the CTA buttons
                document.getElementById('join-waitlist-top').style.display = 'none';
            }
        }, 1000);