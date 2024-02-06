document.addEventListener("DOMContentLoaded", function() {
    var questionElement = document.getElementById("question");
    var answerElement = document.getElementById("answer");
    var buttonElement = document.getElementById("check-answer");
    var feedbackElement = document.getElementById("feedback"); // Ensure this element is in your HTML
    var currentAttempt = 0; // Track the number of attempts

    function generateQuestion() {
        var types = ["addition", "multiplication", "division", "subtraction"];
        var type = types[Math.floor(Math.random() * types.length)];
        var a, b, answer;

        switch (type) {
            case "addition":
                if (Math.random() < .09) {
                    a = Math.floor(Math.random() * 900) + 100; // 100 to 999
                    b = Math.floor(Math.random() * 900) + 100; // 100 to 999
                }
                else {
                    a = Math.floor(Math.random() * 90) + 10; // 100 to 999
                    b = Math.floor(Math.random() * 90) + 10; // 100 to 999
                }
                answer = a + b;
                break;
            case "multiplication":
                if (Math.random() < 0.5) { // 50% chance for 'a' or 'b' to be a three-digit number ending in 0
                    a = (Math.floor(Math.random() * 90) + 1) * 1;
                    b = Math.floor(Math.random() * 9) + 1;
                } else {
                    a = Math.floor(Math.random() * 9) + 1;
                    b = (Math.floor(Math.random() * 90) + 1) * 1;
                }
                answer = a * b;
                break;                
            case "division":
                b = Math.floor(Math.random() * 12) + 1;
                answer = Math.floor(Math.random() * 12) + 1;
                a = b * answer;
                break;
            case "subtraction":
                if (Math.random() < .09) {
                    a = Math.floor(Math.random() * 900) + 100;
                    b = Math.floor(Math.random() * (a - 1)) + 1;
                }
                else {
                    a = Math.floor(Math.random() * 90) + 100;
                    b = Math.floor(Math.random() * (a - 1)) + 1;
                }
                
                answer = a - b;
                break;
        }
        questionElement.textContent = `What is ${a} ${type === 'addition' ? '+' : type === 'multiplication' ? '*' : type === 'division' ? '/' : '-'} ${b}?`;
        return answer;
    }

    var correctAnswer = generateQuestion();

    answerElement.addEventListener("input", function() {
        buttonElement.style.backgroundColor = this.value ? "#395a96" : "gray";
        buttonElement.style.cursor = this.value ? "pointer" : "default";
    });

    document.getElementById("math-form").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the form from submitting
            buttonElement.click();
        }
    });

    buttonElement.addEventListener("click", function(e) {
        e.preventDefault();
        var userAnswer = parseFloat(answerElement.value);
        showFeedback(userAnswer === correctAnswer, correctAnswer);
    
        // Diagnostic log to verify the condition is met
        console.log("User Answer: ", userAnswer, "Correct Answer: ", correctAnswer, "Current Attempt: ", currentAttempt);
    
        if (userAnswer === correctAnswer) {
            console.log("Redirecting to YouTube in 1 second...");
            setTimeout(function() {
                console.log("Redirect now!");
                // Explicitly using window.location to navigate
                window.location = "https://www.youtube.com";
            }, 1000); // Delay in milliseconds
        } else {
            currentAttempt++;
            if (currentAttempt === 2) {
                console.log("Redirecting to YouTube Kids in 1 second...");
                setTimeout(function() {
                    console.log("Redirect to YouTube Kids now!");
                    window.location = "https://www.youtubekids.com";
                }, 1000); // Delay in milliseconds
            }
            correctAnswer = generateQuestion();
            answerElement.value = ""; // Clear the input field
        }
    });        
    function showFeedback(isCorrect, answer) {
        feedbackElement.style.opacity = 0; // Reset opacity to ensure transition effect
        feedbackElement.style.visibility = 'hidden'; // Initially hidden for transition
        setTimeout(() => { // Delay to allow CSS to apply
            feedbackElement.textContent = isCorrect ? `Correct! The answer was ${answer}!` : `Incorrect! The answer was not ${answer}.` + (currentAttempt === 2 ? " Redirecting." : " Try again.");
            feedbackElement.className = isCorrect ? 'correct' : 'incorrect';
            feedbackElement.style.visibility = 'visible';
            feedbackElement.style.opacity = 1;
            setTimeout(() => {
                feedbackElement.style.opacity = 0; // Fade out after 3 seconds
                setTimeout(() => {
                    feedbackElement.className = 'hidden';
                    feedbackElement.style.visibility = 'hidden'; // Hide after fade out
                }, 300); // Wait for opacity transition
            }, 3000);
        }, 10); // Small delay to ensure CSS transition applies
    }    
});
