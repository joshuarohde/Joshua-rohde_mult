$(document).ready(function() {
    // SECTION 1: Image Movement
    let interval; // Variable to hold the interval ID

    function moveImage(direction) {
        let distance = 10; // Distance to move in pixels
        let speed = 'fast'; // Animation speed

        // Determine the direction and axis of movement
        var properties = {};
        if (direction === "up") {
            properties.top = "-=" + distance + "px";
        } else if (direction === "down") {
            properties.top = "+=" + distance + "px";
        } else if (direction === "left") {
            properties.left = "-=" + distance + "px";
        } else if (direction === "right") {
            properties.left = "+=" + distance + "px";
        }

        // Animate the image
        $("#image").animate(properties, speed, 'linear');
    }

    function startMoving(direction) {
        clearInterval(interval); // Clear any existing interval
        moveImage(direction); // Move the image immediately
        interval = setInterval(function() {
            moveImage(direction); // Move the image continuously
        }, 200); // Adjust speed of continuous movement
    }

    function stopMoving() {
        clearInterval(interval); // Stop continuous movement
        $("#image").stop(true, true); // Stop any ongoing animation
    }

    // Event handlers for button presses and releases
    $("#up").mousedown(function() {
        startMoving("up");
    }).mouseup(stopMoving);

    $("#down").mousedown(function() {
        startMoving("down");
    }).mouseup(stopMoving);

    $("#left").mousedown(function() {
        startMoving("left");
    }).mouseup(stopMoving);

    $("#right").mousedown(function() {
        startMoving("right");
    }).mouseup(stopMoving);

    // SECTION 2: Quiz
    const correctAnswer = "White";
    const options = $(".option");
    const resultMessage = $("#result");

    options.click(function() {
        const selectedAnswer = $(this).text().trim();
        if (selectedAnswer === correctAnswer) {
            resultMessage.text("Correct!").removeClass("text-danger").addClass("text-success");
        } else {
            resultMessage.text("Try again!").removeClass("text-success").addClass("text-danger");
        }
    });

    // SECTION 3: Animation on Scroll
    $(window).scroll(function() {
        $('.moving-content').addClass('animate__heartBeat');
        $('.moving-content').removeClass('');
        setTimeout(function(){
            $('.moving-content').removeClass('animate__heartBeat');
        }, 1000); // Change 1000 to the duration of the heartBeat animation if needed
    });

    // SECTION 4: Click Game
    const clickImg = $('#clickImg');
    const liveClickCount = $('#liveClickCount');
    const timerDisplay = $('#timerDisplay');
    const resultDisplay = $('#resultDisplay');
    const startBtn = $('#startBtn');
    let clicks = 0;
    let timeLeft = 10;
    let gameStarted = false;

    function startGame() {
        if (!gameStarted) {
            gameStarted = true;
            startBtn.prop('disabled', true);
            clickImg.css('pointer-events', 'auto');
            clicks = 0; // Reset clicks
            timeLeft = 10; // Reset timeLeft
            resultDisplay.text(''); // Reset result display
            timerDisplay.text("READY? START BY CLICKING GEREMY!");
            liveClickCount.text("Live Click Count: 0"); // Reset live click count

            clickImg.on('click', () => {
                if (gameStarted) {
                    clicks++;
                    liveClickCount.text(`Live Click Count: ${clicks}`); // Update live click count
                    clickImg.addClass('animate__animated animate__rubberBand');
                    setTimeout(() => {
                        clickImg.removeClass('animate__animated animate__rubberBand');
                    }, 1000);

                    if (clicks === 1) {
                        startTimer();
                    }
                }
            });
        }
    }

    function startTimer() {
        const timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.text(`Time Left: ${timeLeft}s`);

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                clickImg.css('pointer-events', 'none');
                resultDisplay.text(`Game Over! You made ${clicks} clicks.`);
                resultDisplay.addClass('animate__animated animate__fadeInUp');
                startBtn.prop('disabled', false); // Enable the start button again
                gameStarted = false; // Reset gameStarted
            }
        }, 1000);
    }

    startBtn.click(startGame);
});
