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
    const correctAnswer = "ANSWER2";
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