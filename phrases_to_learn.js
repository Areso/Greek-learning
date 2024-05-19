cards = [
 {"gr": "είμαι",
  "en": "to be",
  "constructions": ["present"],
  "gr_ex": [
    {"present":["Εγώ είμαι ενας αντρας"]},
  ],
  "en_ex": [
    {"present":["I am a man"]},
  ],
  "ctable": [
    {"present":["είμαι","είσαι","είναι",
    "είμαστε","είσαστε/είστε","είναι"]},
  ],
  "img":"decks/big_imgs/arrow.jpg"},
]
let current_card = 0
personas = [
    "Εγώ",
    "Εσύ",
    "Αυτός/αυτή/αυτό(m/f/it)",
    "Εμείς",
    "Εσείς(formal/plural)",
    "Αυτοί/Αυτές/Αυτά",
]
function nextCard(){
  const lenCards = cards.length
  const card_number_to_ask = Math.floor(Math.random() * lenCards);
  current_card   = card_number_to_ask;
  const lenConstructs= cards[card_number_to_ask].constructions.length;
  const constrId     = Math.floor(Math.random() * lenConstructs);
  const constrName   = cards[card_number_to_ask].constructions[constrId];
  const lenExamples  = cards[card_number_to_ask].en_ex[constrId][constrName].length;
  const exampledId   = Math.floor(Math.random() * lenExamples);
  let   theText  = cards[card_number_to_ask].gr+"<br><br>";
  theText       += cards[card_number_to_ask].en+"<br><br>";

  theText       += cards[card_number_to_ask].gr_ex[constrId][constrName][exampledId]+"<br>";
  theText       += cards[card_number_to_ask].en_ex[constrId][constrName][exampledId]+"<br><br>";
  lenConj        = cards[card_number_to_ask].ctable[constrId][constrName].length;
  conjPos        = 0;
  console.log(lenConj)
  if (lenConj !== 0) {
    console.log("check conj table is not blank")
    while (conjPos<lenConj){
      console.log("populate conj table")
      theText     += personas[conjPos]+" "+ cards[card_number_to_ask].ctable[constrId][constrName][conjPos]+"<br>";
      conjPos     += 1;
    }
  }
  document.getElementById("div_question").innerHTML=theText;
}
nextCard();