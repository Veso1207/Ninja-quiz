
let corectAnswer = ['A', 'B', 'B', 'A', ];
let result = document.querySelector('.result');
let form = document.querySelector('.quiz-form');
let span = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  // select user answer 
  let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  // itterate through answers and compare tham with corect answer

  userAnswer.forEach((answer, i) => {

    // check if user answer match corect answer
    
    if (answer === corectAnswer[i]) {
      score += 25;

    }
  });
  scrollTo(0, 0);
  result.classList.remove('d-none');
  result.querySelector('span');

  let count = 0;
  // set interval for counter
  let counter = setInterval(() => {

    span.textContent = `${count}%`;
    if (count === score) {
      clearInterval(counter);
    } else {
      count++;
    }
  }, 10);

});
