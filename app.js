document.addEventListener("DOMContentLoaded", function () {
  const quizData = {
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars",
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: [
          "William Shakespeare",
          "Mark Twain",
          "Charles Dickens",
          "Leo Tolstoy",
        ],
        correct: "William Shakespeare",
      },
    ],
  };

  // Select the container where the quiz will be displayed
  const quizContainer = document.getElementById("quiz");

  // Loop through the questions and display them with radio buttons
  quizData.questions.forEach((quizItem, questionIndex) => {
    // Add the question
    quizContainer.innerHTML += `<p>${questionIndex + 1}. ${quizItem.question}</p>`;

    // Add the options as radio buttons
    quizItem.options.forEach((option) => {
      quizContainer.innerHTML += `
        <label>
          <input type="radio" name="question${questionIndex}" value="${option}">
          ${option}
        </label><br>
      `;
    });
  });
});

// Function to calculate and display the score
document.getElementById("mybutton").addEventListener("click", submitQuiz);
function submitQuiz() {
  let score = 0;

  // Get quiz data (inside the event listener, quizData would be out of scope, so we define it globally)
  const quizData = {
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars",
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: [
          "William Shakespeare",
          "Mark Twain",
          "Charles Dickens",
          "Leo Tolstoy",
        ],
        correct: "William Shakespeare",
      },
    ],
  };

  // Loop through each question
  quizData.questions.forEach((quizItem, questionIndex) => {
    // Get the selected option for the current question
    const selectedOption = document.querySelector(
      `input[name="question${questionIndex}"]:checked`
    );

    // Check if the selected option is correct
    if (selectedOption && selectedOption.value === quizItem.correct) {
      score++; // Increment score if correct
    }
  });

  // Display the score
  const scoreContainer = document.getElementById("score");
  scoreContainer.textContent = `Your Score: ${score} / ${quizData.questions.length}`;
}