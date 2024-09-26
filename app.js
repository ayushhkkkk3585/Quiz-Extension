const quizData = {
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"]
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"]
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Leo Tolstoy"]
      }
    ]
  };
  
  // Select the container where the quiz will be displayed
  const quizContainer = document.getElementById('quiz');
  
  // Loop through the questions and display them with radio buttons
  quizData.questions.forEach((quizItem, questionIndex) => {
    // Add the question
    quizContainer.innerHTML += `<p>${questionIndex + 1}. ${quizItem.question}</p>`;
  
    // Add the options as radio buttons
    quizItem.options.forEach(option => {
      quizContainer.innerHTML += `
        <label>
          <input type="radio" name="question${questionIndex}" value="${option}">
          ${option}
        </label><br>
      `;
    });
  });
  