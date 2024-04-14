$(document).ready(function() {
    var interval; // Variable to hold the interval ID

    function moveImage(direction) {
        var distance = 10; // Distance to move in pixels
        var speed = 'fast'; // Animation speed

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
});

// SECTION 2

$(document).ready(function() {
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
  });

//   SECTION 3

$(document).ready(function() {
    $(window).scroll(function() {
      $('.moving-content').addClass('animate__heartBeat');
      $('.moving-content').removeClass('');
      setTimeout(function(){
        $('.moving-content').removeClass('animate__heartBeat');
      }, 1000); // Change 1000 to the duration of the heartBeat animation if needed
    });
  });


//   section 4
console.log("Script loaded.");

document.addEventListener('DOMContentLoaded', function () {
    const clickImg = document.getElementById('clickImg');
    const liveClickCount = document.getElementById('liveClickCount');
    console.log("liveClickCount:", liveClickCount); // Add this line to check liveClickCount
  
  const timerDisplay = document.getElementById('timerDisplay');
  const resultDisplay = document.getElementById('resultDisplay');
  const startBtn = document.getElementById('startBtn');
  let clicks = 0;
  let timeLeft = 10;
  let gameStarted = false;

  function startGame() {
    if (!gameStarted) {
      gameStarted = true;
      startBtn.disabled = true;
      clickImg.style.pointerEvents = 'auto';
      clicks = 0; // Reset clicks
      timeLeft = 10; // Reset timeLeft
      resultDisplay.textContent = ''; // Reset result display
      timerDisplay.textContent = "READY? START BY CLICKING GEREMY!";
      liveClickCount.textContent = "Live Click Count: 0"; // Reset live click count

      clickImg.addEventListener('click', () => {
        if (gameStarted) {
          clicks++;
          liveClickCount.textContent = `Live Click Count: ${clicks}`; // Update live click count
          clickImg.classList.add('animate__animated', 'animate__rubberBand');
          setTimeout(() => {
            clickImg.classList.remove('animate__animated', 'animate__rubberBand');
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
      timerDisplay.textContent = `Time Left: ${timeLeft}s`;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        clickImg.style.pointerEvents = 'none';
        resultDisplay.textContent = `Game Over! You made ${clicks} clicks.`;
        resultDisplay.classList.add('animate__animated', 'animate__fadeInUp');
        startBtn.disabled = false; // Enable the start button again
        gameStarted = false; // Reset gameStarted
      }
    }, 1000);
  }

  startBtn.addEventListener('click', startGame);
});
