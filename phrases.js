cards = [
  {"en_t": "Where are you(formal) from?",
   "gr_f": "Από πού είστε;",
   "gr_q": "Από ... είστε;",
   "gr_a": "πού"},
  {"en_t": "Where are you(informal) from?",
   "gr_f": "Από πού είσαε;",
   "gr_q": "Από ... είσαε;",
   "gr_a": "πού"},
]
let current_card = 0
function nextCard(){
  const lenCards = cards.length
  const card_number_to_ask = Math.floor(Math.random() * lenCards);
  current_card   = card_number_to_ask;
  let   question = cards[card_number_to_ask].en_t+"<br><br>";
  question      += cards[card_number_to_ask].gr_q;
  document.getElementById("div_question").innerHTML=question;
  document.getElementById("divCorrectAnswer").style.visibility = "hidden";
  document.getElementById("divCheckResult").innerHTML="";
}
nextCard()
function showCorrectAnswer() {
  const curQuestionAnswer = cards[current_card].gr_a;
  document.getElementById("divCorrectAnswer").innerHTML=curQuestionAnswer;
  document.getElementById("divCorrectAnswer").style.visibility = "visible";
}
function check() {
  const userAnswer        = document.getElementById("user_response").value;
  const curQuestionAnswer = cards[current_card].gr_a;
  if (userAnswer === curQuestionAnswer) {
    document.getElementById("divCheckResult").innerHTML="CORRECT";
  } else {
    document.getElementById("divCheckResult").innerHTML="NOT CORRECT";
  }
}