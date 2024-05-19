cards = [
  {"en_t": "Where are you(formal) from?",
   "gr_f": "Από πού είστε;",
   "gr_q": "Από ... είστε;",
   "gr_a": "πού"},
  {"en_t": "Where are you(informal) from?",
   "gr_f": "Από πού είσαε;",
   "gr_q": "Από ... είσαε;",
   "gr_a": "πού"},
  {"en_t": "I am from France",
   "gr_f": "Eίμαι από τη Γαλλία",
   "gr_q": "... (I am) από τη Γαλλία",
   "gr_a": "Eίμαι",
   "arg1": ["τη Γαλλία","τη Ρωσία","την Κυπρο"]},
  {"en_t": "From which part?",
   "gr_f": "Από ποιο μέρος;",
   "gr_q": "Από ποιο ...(part);",
   "gr_a": "μέρος"},
  {"en_t": "From which part?",
   "gr_f": "Από ποιο μέρος;",
   "gr_q": "Από ...(which) μέρος;",
   "gr_a": "ποιο"},
  {"en_t": "Where are you from?",
   "gr_f": "Εσείς από πού είστε;",
   "gr_q": "...(you, f) από πού είστε;",
   "gr_a": "Εσείς"},
  {"en_t": "Where are you from?",
   "gr_f": "Εσύ από πού είσαι;",
   "gr_q": "... (you, if) από πού είσαι;",
   "gr_a": "Εσύ"},
  {"en_t": "Where are you from?",
   "gr_f": "Εσείς από πού είστε;",
   "gr_q": "... (you, f) από πού είστε;",
   "gr_a": "Εσείς"},
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
  const curQuestionAnswer = cards[current_card].gr_a.toLowerCase();
  document.getElementById("divCorrectAnswer").innerHTML=curQuestionAnswer.toLowerCase();
  document.getElementById("divCorrectAnswer").style.visibility = "visible";
}
function check() {
  const userAnswer        = document.getElementById("user_response").value.toLowerCase();;
  const curQuestionAnswer = cards[current_card].gr_a.toLowerCase();
  if (userAnswer === curQuestionAnswer) {
    document.getElementById("divCheckResult").innerHTML="CORRECT";
  } else {
    document.getElementById("divCheckResult").innerHTML="NOT CORRECT";
  }
}