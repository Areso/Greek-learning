const cases = ["Nominative", "Vocative (calling case)", "Accusative", "Genitive"];
const genders = ["Masculine", "Feminine", "Neuter"];
const numbers = ["singular", "plural"];

let currentCardIndex = -1;
let correctAnswer = "";

function randomIndex(length, previousIndex = -1) {
  if (length <= 1) return 0;

  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === previousIndex);
  return index;
}

function buildTable(card, hiddenForm) {
  const rows = numbers.map((number) => {
    const caseRows = cases.map((caseName, caseIndex) => {
      const cells = genders.map((gender, genderIndex) => {
        const isHidden = hiddenForm
          && hiddenForm.number === number
          && hiddenForm.caseIndex === caseIndex
          && hiddenForm.genderIndex === genderIndex;
        const value = isHidden ? '<span class="missing-form">?</span>' : card.forms[number][caseIndex][genderIndex];
        return `<td data-label="${gender}">${value}</td>`;
      }).join("");

      return `<tr><th scope="row">${caseName}</th>${cells}</tr>`;
    }).join("");

    return `<tbody><tr class="number-row"><th colspan="4">${number}</th></tr>${caseRows}</tbody>`;
  }).join("");

  return `
    <div class="declension-table-wrap">
      <table class="declension-table">
        <thead>
          <tr><th>Case</th>${genders.map((gender) => `<th>${gender}</th>`).join("")}</tr>
        </thead>
        ${rows}
      </table>
    </div>`;
}

function nextCard() {
  currentCardIndex = randomIndex(adjectiveCards.length, currentCardIndex);
  const card = adjectiveCards[currentCardIndex];
  const example = card.examples[randomIndex(card.examples.length)];
  const question = document.getElementById("div_question");

  if (lessonType === "learn") {
    question.innerHTML = `
      <div class="adjective-heading">
        <strong>${card.greek}</strong>
        <span>${card.english}</span>
      </div>
      ${buildExample(example, true)}
      ${buildTable(card)}`;
    return;
  }

  const number = numbers[randomIndex(numbers.length)];
  const caseIndex = randomIndex(cases.length);
  const genderIndex = randomIndex(genders.length);
  correctAnswer = card.forms[number][caseIndex][genderIndex];

  question.innerHTML = `
    <div class="adjective-heading">
      <strong>${card.greek}</strong>
      <span>${card.english}: ${cases[caseIndex]}, ${number}, ${genders[genderIndex].toLowerCase()}</span>
    </div>
    ${buildExample(example, false)}
    ${buildTable(card, { number, caseIndex, genderIndex })}`;

  document.getElementById("answer_text_field").value = "";
  const result = document.getElementById("result_or_correct_answer");
  result.textContent = "";
  result.className = "";
  document.getElementById("answer_text_field").focus();
}

function buildExample(example, showGreek) {
  return `
    <div class="adjective-example">
      <span class="example-label">Example: ${example.label}</span>
      ${showGreek ? `<strong lang="el">${example.greek}</strong>` : ""}
      <span>${example.english}</span>
    </div>`;
}

function normalized(value) {
  return value.trim().toLocaleLowerCase("el-GR").normalize("NFC");
}

function check() {
  const result = document.getElementById("result_or_correct_answer");
  const answer = document.getElementById("answer_text_field").value;
  const isCorrect = normalized(answer) === normalized(correctAnswer);
  result.textContent = isCorrect ? "CORRECT" : "INCORRECT";
  result.className = isCorrect ? "correct" : "wrong";
}

function showCorrect() {
  const result = document.getElementById("result_or_correct_answer");
  result.textContent = correctAnswer;
  result.className = "correct";
}

const answerField = document.getElementById("answer_text_field");
if (answerField) {
  answerField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") check();
  });
}

nextCard();
