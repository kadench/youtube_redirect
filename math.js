document.addEventListener("DOMContentLoaded", function() {
    var questionElement = document.getElementById("question");
    var answerElement = document.getElementById("answer");
    var buttonElement = document.getElementById("check-answer");
    var feedbackElement = document.getElementById("feedback");
    var currentAttempt = 0;
    var correctAnswer = generateQuestion(); // Initialize and assign correct answer to global variable

    function generateQuestion() {
        var types = ["addition", "multiplication", "division", "subtraction"];
        var type = types[Math.floor(Math.random() * types.length)];
        var a, b, answer;

        switch (type) {
            case "addition":
                a = Math.random() < 0.09 ? Math.floor(Math.random() * 900) + 100 : Math.floor(Math.random() * 90) + 10;
                b = Math.random() < 0.09 ? Math.floor(Math.random() * 900) + 100 : Math.floor(Math.random() * 90) + 10;
                break;
            case "multiplication":
                a = Math.random() < 0.5 ? (Math.floor(Math.random() * 90) + 1) : Math.floor(Math.random() * 9) + 1;
                b = Math.random() < 0.5 ? Math.floor(Math.random() * 9) + 1 : (Math.floor(Math.random() * 90) + 1);
                break;                
            case "division":
                b = Math.floor(Math.random() * 12) + 1;
                answer = Math.floor(Math.random() * 12) + 1;
                a = b * answer;
                break;
            case "subtraction":
                a = Math.random() < 0.09 ? Math.floor(Math.random() * 900) + 100 : Math.floor(Math.random() * 90) + 100;
                b = Math.floor(Math.random() * (a - 1)) + 1;
                break;
        }

        answer = evaluateAnswer(a, b, type); // Calculate answer based on operation
        questionElement.textContent = `What is ${a} ${type === 'addition' ? '+' : type === 'multiplication' ? '*' : type === 'division' ? '/' : '-'} ${b}?`;
        return answer;
    }

    function evaluateAnswer(a, b, type) {
        switch (type) {
            case "addition":
                return a + b;
            case "multiplication":
                return a * b;
            case "division":
                return a / b;
            case "subtraction":
                return a - b;
        }
    }

    // Function to toggle the button's disabled state based on the input's content
    function toggleButtonState() {
        var shouldDisable = !answerElement.value.trim(); // Disable if input is empty
        buttonElement.disabled = shouldDisable;
        // Update cursor style directly in CSS or leave as default behavior for disabled elements
    }

    answerElement.addEventListener("input", function() {
        buttonElement.style.backgroundColor = this.value ? "#ff0000" : "gray";
        toggleButtonState(); // Call this function on input change
    });

    document.getElementById("math-form").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (!buttonElement.disabled) { // Only click if the button is not disabled
                buttonElement.click();
            }
        }
    });

    buttonElement.addEventListener("click", function(e) {
        e.preventDefault();
        var userAnswer = parseFloat(answerElement.value); // Parse once and reuse
        var isCorrect = userAnswer === correctAnswer;
        showFeedback(isCorrect, userAnswer, correctAnswer);
    
        if (isCorrect) {
            setTimeout(function() {
                window.location.replace("https://www.youtube.com");
            }, 1000);
        } else {
            currentAttempt++;
            if (currentAttempt === 2) {
                setTimeout(function() {
                    window.location.replace("https://www.youtubekids.com");
                }, 1000);
            }
            correctAnswer = generateQuestion(); // Regenerate question for next attempt
            answerElement.value = "";
            toggleButtonState(); // Ensure button state is updated with new question
        }
    });

    function showFeedback(isCorrect, canswer, answer) {
        feedbackElement.style.opacity = 0;
        feedbackElement.style.visibility = 'hidden';
        setTimeout(() => {
            feedbackElement.textContent = isCorrect ? `Correct! The answer was ${answer}!` : `Incorrect! The answer was not ${canswer}.` + (currentAttempt === 2 ? " Redirecting." : " Try again.");
            feedbackElement.className = isCorrect ? 'correct' : 'incorrect';
            feedbackElement.style.visibility = 'visible';
            feedbackElement.style.opacity = 1;
            setTimeout(() => {
                feedbackElement.style.opacity = 0;
                setTimeout(() => {
                    feedbackElement.className = 'hidden';
                    feedbackElement.style.visibility = 'hidden';
                }, 300);
            }, 3000);
        }, 10);
    }

    // Initial check to set the correct initial state of the button
    toggleButtonState();
});