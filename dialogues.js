cards = [
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Πώς σε λένε; Από πού είσαι;",
                   "Πώς λέγεστε; Από πού είστε;"]},
     ],
     "en_ex": [
       {"present":["What is your name? Where are you from?",
                   "What is your name? Where are you from?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Πώς είσαι; Τι νέα;",
                   "Τι κάνεις; Τι νέα;"]},
     ],
     "en_ex": [
       {"present":["How are you? What's new?",
                   "How are you? What's new?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
   {"constructions": ["present"],
     "gr_ex": [
       {"present":["Του μένεις; Πού ακριβώς;"]},
     ],
     "en_ex": [
       {"present":["Where do you live? Where exactly?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
   {"constructions": ["present"],
     "gr_ex": [
       {"present":["Του μένεις; Πού ακριβώς;"]},
     ],
     "en_ex": [
       {"present":["Where do you live? Where exactly?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
   {"constructions": ["present"],
     "gr_ex": [
       {"present":["Πού μένεις; Πού ακριβώς;"]},
     ],
     "en_ex": [
       {"present":["Where do you live? Where exactly?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
   {"constructions": ["present"],
     "gr_ex": [
       {"present":["Έχεις  τηλέφωνο; Το κινητό σου;",
                   "Έχεις  τηλέφωνο; Το σταθερό σου;",
                   "Τι τηλέφωνο έχεις; Το κινητό σου;",
                   "Τι τηλέφωνο έχεις; Το σταθερό σου;",
                ]},
     ],
     "en_ex": [
        {"present":["Do you have a phone (number)? Your mobile?",
                    "Do you have a phone (number)? Your landline?",
                    "Do you have a phone (number)? Your mobile?",
                    "Do you have a phone (number)? Your landline?",
         ]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Πού μένεις; Πού ακριβώς;"]},
     ],
     "en_ex": [
       {"present":["Where do you live? Where exactly?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Ποιος είναι αυτός;",
                   "Ποια είνα αυτή;",
                   "Ποιο είναι αυτό το παιδί;"
                ]},
     ],
     "en_ex": [
       {"present":["Who are they?",
                   "Who are they(f)?",
                   "Who is this child(n)?"
                ]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Πώς το λένε στα ελληνικά (directing to the object);"]},
     ],
     "en_ex": [
       {"present":["How it is called in Greek (directing to the object);"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Είσαι παντεμένος; Είσαι παντεμένη;",
                   "Είσαι ελεύθερος; Είσαι ελεύφερη;"
       ]},
     ],
     "en_ex": [
       {"present":["Are you married(m)? Are you married(f)?",
                   "Are you single(m)? Are you single(f)"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Έχεις παιδί; Έχετε παιδί;",
                   "Έχεις παιδιά;  Έχετε παιδιά;"
       ]},
     ],
     "en_ex": [
       {"present":["Do you have a child(inf)? Do you have a child(formal)?",
                   "Do you have children(inf)? Do you have children(formal)?"
                   ]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
    {"constructions": ["present"],
     "gr_ex": [
       {"present":["Πού μένεις; Πού ακριβώς;"]},
     ],
     "en_ex": [
       {"present":["Where do you live? Where exactly?"]},
     ],
     "img":"decks/big_imgs/placeholder.jpg"},
]
//1
//Eisai/Eiste apo ton Kanada? thn Alvania; to Belgio? Pos sas lene? Pos th lene? Pos ton lene?
//«Μπορείτε να το επαναλάβετε αργά, παρακαλώ;
//2
//Μια χαρα' , Καλα', Τα ι'δια, ο'χι και τόσς καλα'
//Πολυ' καλα', ε'τσι κι ε'τσι, καλου'τικα, χα'λια
//3
//Μεν στον / στην / στο ...
//Easy greek podcast have this question about growing up sthn Athens
//4 to noumero' mou einai
//...χωρισμένος/μένη
// poiow einai autos; pos ton lene?
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
  const lenCards           = cards.length;
  const card_number_to_ask = Math.floor(Math.random() * lenCards);
  current_card             = card_number_to_ask;
  console.log("card_number_to_ask",card_number_to_ask); 
  const lenConstructs      = cards[card_number_to_ask].constructions.length;
  const constrId           = Math.floor(Math.random() * lenConstructs);
  console.log("constrId",constrId);
  const constrName         = cards[card_number_to_ask].constructions[constrId]; 
  console.log("constrName",constrName);
  const lenExamples        = cards[card_number_to_ask].en_ex[constrId][constrName].length;
  const exampledId         = Math.floor(Math.random() * lenExamples);
    
  if (lesson_type==="memorize"){
    //let   theText  = cards[card_number_to_ask].gr+"<br><br>";
    //theText       += cards[card_number_to_ask].en+"<br><br>";
    let theText    = cards[card_number_to_ask].gr_ex[constrId][constrName][exampledId]+"<br>";
    theText       += cards[card_number_to_ask].en_ex[constrId][constrName][exampledId]+"<br><br>";
    document.getElementById("div_question").innerHTML=theText;
  }
}
nextCard();