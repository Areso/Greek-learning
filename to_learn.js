//«Μπορείτε να το επαναλάβετε αργά, παρακαλώ;
let current_card = 0
personas = [
  "Εγώ",
  "Εσύ",
  "Αυτός/αυτή/αυτό(m/f/it)",
  "Εμείς",
  "Εσείς(formal/plural)",
  "Αυτοί/Αυτές/Αυτά",
]
function nextCard() {
  const lenCards = cards.length;
  const card_number_to_ask = Math.floor(Math.random() * lenCards);
  current_card = card_number_to_ask;
  console.log("card_number_to_ask", card_number_to_ask);
  const lenConstructs = cards[card_number_to_ask].constructions.length;
  const constrId = Math.floor(Math.random() * lenConstructs);
  console.log("constrId", constrId);
  const constrName = cards[card_number_to_ask].constructions[constrId];
  console.log("constrName", constrName);

  en_constrName = Object.keys(cards[card_number_to_ask].en_ex[constrId])[0]

  const lenExamples = cards[card_number_to_ask].en_ex[constrId][en_constrName].length;
  const exampledId = Math.floor(Math.random() * lenExamples);

  if (lesson_type === "memorize") {
    let theText = cards[card_number_to_ask].gr + "<br><br>";
    theText += cards[card_number_to_ask].en + "<br><br>";
    theText += cards[card_number_to_ask].gr_ex[constrId][constrName][exampledId] + "<br>";
    //en_constrName = Object.keys(cards[card_number_to_ask].en_ex[constrId])[0]
    //console.log(en_constrName)
    theText += cards[card_number_to_ask].en_ex[constrId][en_constrName][exampledId] + "<br><br>";

    conjPos = 0;


    if (cards[card_number_to_ask].hasOwnProperty("ctable")) {
      ctable = cards[card_number_to_ask].ctable;
      if (ctable.length == 0){
        lenConj = 0
      } else {
        lenConj = cards[card_number_to_ask].ctable[constrId][en_constrName].length;
      }
      if ("labels" in cards[card_number_to_ask]) {
        theText += cards[card_number_to_ask].labels + "<br><br>";
      } else {
        theText += "<br><br>";
      }   
      console.log(lenConj)
      if (lenConj !== 0) {
        while (conjPos < lenConj) {
          console.log("populate conj table")
          theText += personas[conjPos] + " " + cards[card_number_to_ask].ctable[constrId][en_constrName][conjPos] + "<br>";
          conjPos += 1;
        }
      }
    }

    if (cards[card_number_to_ask].hasOwnProperty("atable")) {
      nLen = cards[card_number_to_ask].atable.length;
      if (nLen !== 0){
        while (conjPos < nLen) {
          console.log("populate conj table")

          a = Object.keys(cards[card_number_to_ask].atable[conjPos])
          v = cards[card_number_to_ask].atable[conjPos][a][0]
          theText += v + "<br>";
          conjPos += 1;
        }
      }
    }
    document.getElementById("div_question").innerHTML = theText;
  }
  if (lesson_type === "practice") {
    document.getElementById("answer").value = "";
    document.getElementById("result_or_correct_answer").innerHTML = "";
    lenConj = cards[card_number_to_ask].ctable[constrId][en_constrName].length;
    if (lenConj === 0) {
      console.log("next card, this one is not conjugated")
      nextCard();
    }
    if (lenConj !== 0) {
      conjPos = Math.floor(Math.random() * lenConj);
    }
    conjugated = cards[card_number_to_ask].ctable[constrId][en_constrName][conjPos];
    question = personas[conjPos] + " " + conjugated + " <br>";
    correctAnswer = question.split(' ')[1] // first we have pronoun, then verb, then everything else
    questionToAsk = conjugated.split(' ');
    questionToAsk[0] = '----';
    engVerb = " (" + cards[card_number_to_ask].en + ")";
    upd_questionToAsk = personas[conjPos] + " " + questionToAsk.join(' ') + engVerb;
    htmlQuestion = document.getElementById("div_question")
    htmlQuestion.innerHTML = upd_questionToAsk
  }
}
function check() {
  userInput = document.getElementById("answer").value.trim().toLowerCase();
  correctAnswer = correctAnswer.toLowerCase();
  resDiv = document.getElementById("result_or_correct_answer");
  if (userInput !== correctAnswer) {
    resDiv.innerHTML = "INCORRECT";
  } else {
    resDiv.innerHTML = "CORRECT";
  }
}
function showCorrect() {
  resDiv = document.getElementById("result_or_correct_answer");
  correctAnswer = correctAnswer.toLowerCase();
  resDiv.innerHTML = correctAnswer;
}
nextCard();

if (lesson_type === "memorize") {
  mytimer = setInterval(nextCard, 30000);
}