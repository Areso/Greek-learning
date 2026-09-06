const adjectiveCards = [
  {
    greek: "απλός",
    english: "simple",
    firstPersonExample: true,
    exampleNouns: [
      { greek: ["άνθρωπος", "άνθρωπο", "ανθρώπου", "άνθρωποι", "ανθρώπους", "ανθρώπων"], english: ["man", "men"] },
      { greek: ["γυναίκα", "γυναίκα", "γυναίκας", "γυναίκες", "γυναίκες", "γυναικών"], english: ["woman", "women"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το σπίτι", "house"],
    forms: {
      singular: [
        ["απλός", "απλή", "απλό"],
        ["απλέ", "απλή", "απλό"],
        ["απλό", "απλή", "απλό"],
        ["απλού", "απλής", "απλού"]
      ],
      plural: [
        ["απλοί", "απλές", "απλά"],
        ["απλοί", "απλές", "απλά"],
        ["απλούς", "απλές", "απλά"],
        ["απλών", "απλών", "απλών"]
      ]
    }
  },
  {
    greek: "καλός",
    english: "good",
    exampleNouns: [
      { greek: ["φίλος", "φίλο", "φίλου", "φίλοι", "φίλους", "φίλων"], english: ["friend", "friends"] },
      { greek: ["φίλη", "φίλη", "φίλης", "φίλες", "φίλες", "φίλων"], english: ["female friend", "female friends"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το σπίτι", "house"],
    forms: {
      singular: [
        ["καλός", "καλή", "καλό"],
        ["καλέ", "καλή", "καλό"],
        ["καλό", "καλή", "καλό"],
        ["καλού", "καλής", "καλού"]
      ],
      plural: [
        ["καλοί", "καλές", "καλά"],
        ["καλοί", "καλές", "καλά"],
        ["καλούς", "καλές", "καλά"],
        ["καλών", "καλών", "καλών"]
      ]
    }
  },
  {
    greek: "μικρός",
    english: "small",
    exampleNouns: [
      { greek: ["σκύλος", "σκύλο", "σκύλου", "σκύλοι", "σκύλους", "σκύλων"], english: ["dog", "dogs"] },
      { greek: ["κοπέλα", "κοπέλα", "κοπέλας", "κοπέλες", "κοπέλες", "κοπελών"], english: ["girl", "girls"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το παιχνίδι", "toy"],
    forms: {
      singular: [
        ["μικρός", "μικρή", "μικρό"],
        ["μικρέ", "μικρή", "μικρό"],
        ["μικρό", "μικρή", "μικρό"],
        ["μικρού", "μικρής", "μικρού"]
      ],
      plural: [
        ["μικροί", "μικρές", "μικρά"],
        ["μικροί", "μικρές", "μικρά"],
        ["μικρούς", "μικρές", "μικρά"],
        ["μικρών", "μικρών", "μικρών"]
      ]
    }
  },
  {
    greek: "μεγάλος",
    english: "big",
    exampleNouns: [
      { greek: ["σκύλος", "σκύλο", "σκύλου", "σκύλοι", "σκύλους", "σκύλων"], english: ["dog", "dogs"] },
      { greek: ["κοπέλα", "κοπέλα", "κοπέλας", "κοπέλες", "κοπέλες", "κοπελών"], english: ["girl", "girls"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το παιχνίδι", "toy"],
    forms: {
      singular: [
        ["μεγάλος", "μεγάλη", "μεγάλο"],
        ["μεγάλε", "μεγάλη", "μεγάλο"],
        ["μεγάλο", "μεγάλη", "μεγάλο"],
        ["μεγάλου", "μεγάλης", "μεγάλου"]
      ],
      plural: [
        ["μεγάλοι", "μεγάλες", "μεγάλα"],
        ["μεγάλοι", "μεγάλες", "μεγάλα"],
        ["μεγάλους", "μεγάλες", "μεγάλα"],
        ["μεγάλων", "μεγάλων", "μεγάλων"]
      ]
    }
  },
  {
    greek: "όμορφος",
    english: "beautiful",
    exampleNouns: [
      { greek: ["κήπος", "κήπο", "κήπου", "κήποι", "κήπους", "κήπων"], english: ["garden", "gardens"] },
      { greek: ["πόλη", "πόλη", "πόλης", "πόλεις", "πόλεις", "πόλεων"], english: ["city", "cities"] },
      { greek: ["σπίτι", "σπίτι", "σπιτιού", "σπίτια", "σπίτια", "σπιτιών"], english: ["house", "houses"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["όμορφος", "όμορφη", "όμορφο"],
        ["όμορφε", "όμορφη", "όμορφο"],
        ["όμορφο", "όμορφη", "όμορφο"],
        ["όμορφου", "όμορφης", "όμορφου"]
      ],
      plural: [
        ["όμορφοι", "όμορφες", "όμορφα"],
        ["όμορφοι", "όμορφες", "όμορφα"],
        ["όμορφους", "όμορφες", "όμορφα"],
        ["όμορφων", "όμορφων", "όμορφων"]
      ]
    }
  },
  {
    greek: "εύκολος",
    english: "easy",
    exampleNouns: [
      { greek: ["δρόμος", "δρόμο", "δρόμου", "δρόμοι", "δρόμους", "δρόμων"], english: ["road", "roads"] },
      { greek: ["άσκηση", "άσκηση", "άσκησης", "ασκήσεις", "ασκήσεις", "ασκήσεων"], english: ["exercise", "exercises"] },
      { greek: ["μάθημα", "μάθημα", "μαθήματος", "μαθήματα", "μαθήματα", "μαθημάτων"], english: ["lesson", "lessons"] }
    ],
    examplePossession: ["Αυτό είναι το τέλος", "end"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["εύκολος", "εύκολη", "εύκολο"],
        ["εύκολε", "εύκολη", "εύκολο"],
        ["εύκολο", "εύκολη", "εύκολο"],
        ["εύκολου", "εύκολης", "εύκολου"]
      ],
      plural: [
        ["εύκολοι", "εύκολες", "εύκολα"],
        ["εύκολοι", "εύκολες", "εύκολα"],
        ["εύκολους", "εύκολες", "εύκολα"],
        ["εύκολων", "εύκολων", "εύκολων"]
      ]
    }
  },
  {
    greek: "δύσκολος",
    english: "difficult",
    exampleNouns: [
      { greek: ["δρόμος", "δρόμο", "δρόμου", "δρόμοι", "δρόμους", "δρόμων"], english: ["road", "roads"] },
      { greek: ["άσκηση", "άσκηση", "άσκησης", "ασκήσεις", "ασκήσεις", "ασκήσεων"], english: ["exercise", "exercises"] },
      { greek: ["μάθημα", "μάθημα", "μαθήματος", "μαθήματα", "μαθήματα", "μαθημάτων"], english: ["lesson", "lessons"] }
    ],
    examplePossession: ["Αυτό είναι το τέλος", "end"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["δύσκολος", "δύσκολη", "δύσκολο"],
        ["δύσκολε", "δύσκολη", "δύσκολο"],
        ["δύσκολο", "δύσκολη", "δύσκολο"],
        ["δύσκολου", "δύσκολης", "δύσκολου"]
      ],
      plural: [
        ["δύσκολοι", "δύσκολες", "δύσκολα"],
        ["δύσκολοι", "δύσκολες", "δύσκολα"],
        ["δύσκολους", "δύσκολες", "δύσκολα"],
        ["δύσκολων", "δύσκολων", "δύσκολων"]
      ]
    }
  },
  {
    greek: "καινούριος",
    english: "new",
    exampleNouns: [
      { greek: ["υπολογιστής", "υπολογιστή", "υπολογιστή", "υπολογιστές", "υπολογιστές", "υπολογιστών"], english: ["computer", "computers"] },
      { greek: ["τσάντα", "τσάντα", "τσάντας", "τσάντες", "τσάντες", "τσαντών"], english: ["bag", "bags"] },
      { greek: ["βιβλίο", "βιβλίο", "βιβλίου", "βιβλία", "βιβλία", "βιβλίων"], english: ["book", "books"] }
    ],
    additionalExampleNouns: [
      {
        genderIndex: 2,
        noun: { greek: ["εισιτήριο", "εισιτήριο", "εισιτηρίου", "εισιτήρια", "εισιτήρια", "εισιτηρίων"], english: ["ticket", "tickets"] }
      }
    ],
    examplePossession: ["Αυτό είναι το κουτί", "box"],
    englishGenitiveStyle: "of",
    extraExamples: [
      {
        label: "genitive plural, masculine",
        variants: [
          {
            greek: "Αυτές είναι οι οδηγίες των καινούριων υπολογιστών.",
            english: "These are the instructions for the new computers."
          }
        ]
      }
    ],
    forms: {
      singular: [
        ["καινούριος", "καινούρια", "καινούριο"],
        ["καινούριε", "καινούρια", "καινούριο"],
        ["καινούριο", "καινούρια", "καινούριο"],
        ["καινούριου", "καινούριας", "καινούριου"]
      ],
      plural: [
        ["καινούριοι", "καινούριες", "καινούρια"],
        ["καινούριοι", "καινούριες", "καινούρια"],
        ["καινούριους", "καινούριες", "καινούρια"],
        ["καινούριων", "καινούριων", "καινούριων"]
      ]
    }
  },
  {
    greek: "παλιός",
    english: "old",
    exampleNouns: [
      { greek: ["υπολογιστής", "υπολογιστή", "υπολογιστή", "υπολογιστές", "υπολογιστές", "υπολογιστών"], english: ["computer", "computers"] },
      { greek: ["τσάντα", "τσάντα", "τσάντας", "τσάντες", "τσάντες", "τσαντών"], english: ["bag", "bags"] },
      { greek: ["βιβλίο", "βιβλίο", "βιβλίου", "βιβλία", "βιβλία", "βιβλίων"], english: ["book", "books"] }
    ],
    additionalExampleNouns: [
      {
        genderIndex: 2,
        noun: { greek: ["εισιτήριο", "εισιτήριο", "εισιτηρίου", "εισιτήρια", "εισιτήρια", "εισιτηρίων"], english: ["ticket", "tickets"] }
      }
    ],
    examplePossession: ["Αυτό είναι το κουτί", "box"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["παλιός", "παλιά", "παλιό"],
        ["παλιέ", "παλιά", "παλιό"],
        ["παλιό", "παλιά", "παλιό"],
        ["παλιού", "παλιάς", "παλιού"]
      ],
      plural: [
        ["παλιοί", "παλιές", "παλιά"],
        ["παλιοί", "παλιές", "παλιά"],
        ["παλιούς", "παλιές", "παλιά"],
        ["παλιών", "παλιών", "παλιών"]
      ]
    }
  },
  {
    greek: "νέος",
    english: "new",
    exampleNouns: [
      { greek: ["φοιτητής", "φοιτητή", "φοιτητή", "φοιτητές", "φοιτητές", "φοιτητών"], english: ["student", "students"] },
      { greek: ["μαθήτρια", "μαθήτρια", "μαθήτριας", "μαθήτριες", "μαθήτριες", "μαθητριών"], english: ["schoolgirl", "schoolgirls"] },
      { greek: ["μέλος", "μέλος", "μέλους", "μέλη", "μέλη", "μελών"], english: ["member", "members"] }
    ],
    additionalExampleNouns: [
      {
        genderIndex: 2,
        noun: { greek: ["εισιτήριο", "εισιτήριο", "εισιτηρίου", "εισιτήρια", "εισιτήρια", "εισιτηρίων"], english: ["ticket", "tickets"] }
      }
    ],
    examplePossession: ["Αυτή είναι η κάρτα", "card"],
    forms: {
      singular: [
        ["νέος", "νέα", "νέο"],
        ["νέε", "νέα", "νέο"],
        ["νέο", "νέα", "νέο"],
        ["νέου", "νέας", "νέου"]
      ],
      plural: [
        ["νέοι", "νέες", "νέα"],
        ["νέοι", "νέες", "νέα"],
        ["νέους", "νέες", "νέα"],
        ["νέων", "νέων", "νέων"]
      ]
    }
  },
  {
    greek: "ψηλός",
    english: "tall",
    exampleNouns: [
      { greek: ["τοίχος", "τοίχο", "τοίχου", "τοίχοι", "τοίχους", "τοίχων"], english: ["wall", "walls"] },
      { greek: ["πολυκατοικία", "πολυκατοικία", "πολυκατοικίας", "πολυκατοικίες", "πολυκατοικίες", "πολυκατοικιών"], english: ["building", "buildings"] },
      { greek: ["βουνό", "βουνό", "βουνού", "βουνά", "βουνά", "βουνών"], english: ["mountain", "mountains"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["ψηλός", "ψηλή", "ψηλό"],
        ["ψηλέ", "ψηλή", "ψηλό"],
        ["ψηλό", "ψηλή", "ψηλό"],
        ["ψηλού", "ψηλής", "ψηλού"]
      ],
      plural: [
        ["ψηλοί", "ψηλές", "ψηλά"],
        ["ψηλοί", "ψηλές", "ψηλά"],
        ["ψηλούς", "ψηλές", "ψηλά"],
        ["ψηλών", "ψηλών", "ψηλών"]
      ]
    }
  },
  {
    greek: "υψηλός",
    english: "high",
    exampleNouns: [
      { greek: ["μισθός", "μισθό", "μισθού", "μισθοί", "μισθούς", "μισθών"], english: ["salary", "salaries"] },
      { greek: ["τιμή", "τιμή", "τιμής", "τιμές", "τιμές", "τιμών"], english: ["price", "prices"] },
      { greek: ["κόστος", "κόστος", "κόστους", "κόστη", "κόστη", "κοστών"], english: ["cost", "costs"] }
    ],
    examplePossession: ["Αυτή είναι η αιτία", "cause"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["υψηλός", "υψηλή", "υψηλό"],
        ["υψηλέ", "υψηλή", "υψηλό"],
        ["υψηλό", "υψηλή", "υψηλό"],
        ["υψηλού", "υψηλής", "υψηλού"]
      ],
      plural: [
        ["υψηλοί", "υψηλές", "υψηλά"],
        ["υψηλοί", "υψηλές", "υψηλά"],
        ["υψηλούς", "υψηλές", "υψηλά"],
        ["υψηλών", "υψηλών", "υψηλών"]
      ]
    }
  },
  {
    greek: "χαμηλός",
    english: "low",
    exampleNouns: [
      { greek: ["μισθός", "μισθό", "μισθού", "μισθοί", "μισθούς", "μισθών"], english: ["salary", "salaries"] },
      { greek: ["τιμή", "τιμή", "τιμής", "τιμές", "τιμές", "τιμών"], english: ["price", "prices"] },
      { greek: ["κόστος", "κόστος", "κόστους", "κόστη", "κόστη", "κοστών"], english: ["cost", "costs"] }
    ],
    examplePossession: ["Αυτή είναι η αιτία", "cause"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["χαμηλός", "χαμηλή", "χαμηλό"],
        ["χαμηλέ", "χαμηλή", "χαμηλό"],
        ["χαμηλό", "χαμηλή", "χαμηλό"],
        ["χαμηλού", "χαμηλής", "χαμηλού"]
      ],
      plural: [
        ["χαμηλοί", "χαμηλές", "χαμηλά"],
        ["χαμηλοί", "χαμηλές", "χαμηλά"],
        ["χαμηλούς", "χαμηλές", "χαμηλά"],
        ["χαμηλών", "χαμηλών", "χαμηλών"]
      ]
    }
  },
  {
    greek: "πλούσιος",
    english: "rich",
    exampleNouns: [
      { greek: ["άντρας", "άντρα", "άντρα", "άντρες", "άντρες", "αντρών"], english: ["man", "men"] },
      { greek: ["γυναίκα", "γυναίκα", "γυναίκας", "γυναίκες", "γυναίκες", "γυναικών"], english: ["woman", "women"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το σπίτι", "house"],
    forms: {
      singular: [
        ["πλούσιος", "πλούσια", "πλούσιο"],
        ["πλούσιε", "πλούσια", "πλούσιο"],
        ["πλούσιο", "πλούσια", "πλούσιο"],
        ["πλούσιου", "πλούσιας", "πλούσιου"]
      ],
      plural: [
        ["πλούσιοι", "πλούσιες", "πλούσια"],
        ["πλούσιοι", "πλούσιες", "πλούσια"],
        ["πλούσιους", "πλούσιες", "πλούσια"],
        ["πλούσιων", "πλούσιων", "πλούσιων"]
      ]
    }
  },
  {
    greek: "φτωχός",
    english: "poor",
    exampleNouns: [
      { greek: ["άντρας", "άντρα", "άντρα", "άντρες", "άντρες", "αντρών"], english: ["man", "men"] },
      { greek: ["γυναίκα", "γυναίκα", "γυναίκας", "γυναίκες", "γυναίκες", "γυναικών"], english: ["woman", "women"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το σπίτι", "house"],
    forms: {
      singular: [
        ["φτωχός", "φτωχή", "φτωχό"],
        ["φτωχέ", "φτωχή", "φτωχό"],
        ["φτωχό", "φτωχή", "φτωχό"],
        ["φτωχού", "φτωχής", "φτωχού"]
      ],
      plural: [
        ["φτωχοί", "φτωχές", "φτωχά"],
        ["φτωχοί", "φτωχές", "φτωχά"],
        ["φτωχούς", "φτωχές", "φτωχά"],
        ["φτωχών", "φτωχών", "φτωχών"]
      ]
    }
  },
  {
    greek: "άσχημος",
    english: "ugly",
    exampleNouns: [
      { greek: ["πίνακας", "πίνακα", "πίνακα", "πίνακες", "πίνακες", "πινάκων"], english: ["painting", "paintings"] },
      { greek: ["εικόνα", "εικόνα", "εικόνας", "εικόνες", "εικόνες", "εικόνων"], english: ["picture", "pictures"] },
      { greek: ["κτίριο", "κτίριο", "κτιρίου", "κτίρια", "κτίρια", "κτιρίων"], english: ["building", "buildings"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["άσχημος", "άσχημη", "άσχημο"],
        ["άσχημε", "άσχημη", "άσχημο"],
        ["άσχημο", "άσχημη", "άσχημο"],
        ["άσχημου", "άσχημης", "άσχημου"]
      ],
      plural: [
        ["άσχημοι", "άσχημες", "άσχημα"],
        ["άσχημοι", "άσχημες", "άσχημα"],
        ["άσχημους", "άσχημες", "άσχημα"],
        ["άσχημων", "άσχημων", "άσχημων"]
      ]
    }
  },
  {
    greek: "ωραίος",
    english: "beautiful",
    exampleNouns: [
      { greek: ["πίνακας", "πίνακα", "πίνακα", "πίνακες", "πίνακες", "πινάκων"], english: ["painting", "paintings"] },
      { greek: ["εικόνα", "εικόνα", "εικόνας", "εικόνες", "εικόνες", "εικόνων"], english: ["picture", "pictures"] },
      { greek: ["κτίριο", "κτίριο", "κτιρίου", "κτίρια", "κτίρια", "κτιρίων"], english: ["building", "buildings"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["ωραίος", "ωραία", "ωραίο"],
        ["ωραίε", "ωραία", "ωραίο"],
        ["ωραίο", "ωραία", "ωραίο"],
        ["ωραίου", "ωραίας", "ωραίου"]
      ],
      plural: [
        ["ωραίοι", "ωραίες", "ωραία"],
        ["ωραίοι", "ωραίες", "ωραία"],
        ["ωραίους", "ωραίες", "ωραία"],
        ["ωραίων", "ωραίων", "ωραίων"]
      ]
    }
  },
  {
    greek: "υγιής",
    english: "healthy",
    exampleNouns: [
      { greek: ["άνθρωπος", "άνθρωπο", "ανθρώπου", "άνθρωποι", "ανθρώπους", "ανθρώπων"], english: ["man", "men"] },
      { greek: ["γυναίκα", "γυναίκα", "γυναίκας", "γυναίκες", "γυναίκες", "γυναικών"], english: ["woman", "women"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["υγιής", "υγιής", "υγιές"],
        ["υγιή", "υγιής", "υγιές"],
        ["υγιή", "υγιή", "υγιές"],
        ["υγιούς", "υγιούς", "υγιούς"]
      ],
      plural: [
        ["υγιείς", "υγιείς", "υγιή"],
        ["υγιείς", "υγιείς", "υγιή"],
        ["υγιείς", "υγιείς", "υγιή"],
        ["υγιών", "υγιών", "υγιών"]
      ]
    }
  },
  {
    greek: "ειλικρινής",
    english: "honest",
    exampleNouns: [
      { greek: ["φίλος", "φίλο", "φίλου", "φίλοι", "φίλους", "φίλων"], english: ["friend", "friends"] },
      { greek: ["φίλη", "φίλη", "φίλης", "φίλες", "φίλες", "φίλων"], english: ["female friend", "female friends"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτή είναι η απάντηση", "answer"],
    forms: {
      singular: [
        ["ειλικρινής", "ειλικρινής", "ειλικρινές"],
        ["ειλικρινή", "ειλικρινής", "ειλικρινές"],
        ["ειλικρινή", "ειλικρινή", "ειλικρινές"],
        ["ειλικρινούς", "ειλικρινούς", "ειλικρινούς"]
      ],
      plural: [
        ["ειλικρινείς", "ειλικρινείς", "ειλικρινή"],
        ["ειλικρινείς", "ειλικρινείς", "ειλικρινή"],
        ["ειλικρινείς", "ειλικρινείς", "ειλικρινή"],
        ["ειλικρινών", "ειλικρινών", "ειλικρινών"]
      ]
    }
  },
  {
    greek: "επιεικής",
    english: "lenient",
    exampleNouns: [
      { greek: ["δικαστής", "δικαστή", "δικαστή", "δικαστές", "δικαστές", "δικαστών"], english: ["judge", "judges"] },
      { greek: ["δασκάλα", "δασκάλα", "δασκάλας", "δασκάλες", "δασκάλες", "δασκάλων"], english: ["teacher", "teachers"] },
      { greek: ["δικαστήριο", "δικαστήριο", "δικαστηρίου", "δικαστήρια", "δικαστήρια", "δικαστηρίων"], english: ["court", "courts"] }
    ],
    examplePossession: ["Αυτή είναι η απόφαση", "decision"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["επιεικής", "επιεικής", "επιεικές"],
        ["επιεική", "επιεικής", "επιεικές"],
        ["επιεική", "επιεική", "επιεικές"],
        ["επιεικούς", "επιεικούς", "επιεικούς"]
      ],
      plural: [
        ["επιεικείς", "επιεικείς", "επιεική"],
        ["επιεικείς", "επιεικείς", "επιεική"],
        ["επιεικείς", "επιεικείς", "επιεική"],
        ["επιεικών", "επιεικών", "επιεικών"]
      ]
    }
  },
  {
    greek: "αφελής",
    english: "naive",
    exampleNouns: [
      { greek: ["άντρας", "άντρα", "άντρα", "άντρες", "άντρες", "αντρών"], english: ["man", "men"] },
      { greek: ["γυναίκα", "γυναίκα", "γυναίκας", "γυναίκες", "γυναίκες", "γυναικών"], english: ["woman", "women"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτή είναι η ιστορία", "story"],
    forms: {
      singular: [
        ["αφελής", "αφελής", "αφελές"],
        ["αφελή", "αφελής", "αφελές"],
        ["αφελή", "αφελή", "αφελές"],
        ["αφελούς", "αφελούς", "αφελούς"]
      ],
      plural: [
        ["αφελείς", "αφελείς", "αφελή"],
        ["αφελείς", "αφελείς", "αφελή"],
        ["αφελείς", "αφελείς", "αφελή"],
        ["αφελών", "αφελών", "αφελών"]
      ]
    }
  },
  {
    greek: "διαρκής",
    english: "lasting",
    exampleNouns: [
      { greek: ["πόνος", "πόνο", "πόνου", "πόνοι", "πόνους", "πόνων"], english: ["pain", "pains"] },
      { greek: ["σχέση", "σχέση", "σχέσης", "σχέσεις", "σχέσεις", "σχέσεων"], english: ["relationship", "relationships"] },
      { greek: ["πρόβλημα", "πρόβλημα", "προβλήματος", "προβλήματα", "προβλήματα", "προβλημάτων"], english: ["problem", "problems"] }
    ],
    examplePossession: ["Αυτή είναι η αιτία", "cause"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["διαρκής", "διαρκής", "διαρκές"],
        ["διαρκή", "διαρκής", "διαρκές"],
        ["διαρκή", "διαρκή", "διαρκές"],
        ["διαρκούς", "διαρκούς", "διαρκούς"]
      ],
      plural: [
        ["διαρκείς", "διαρκείς", "διαρκή"],
        ["διαρκείς", "διαρκείς", "διαρκή"],
        ["διαρκείς", "διαρκείς", "διαρκή"],
        ["διαρκών", "διαρκών", "διαρκών"]
      ]
    }
  },
  {
    greek: "πλήρης",
    english: "complete",
    exampleNouns: [
      { greek: ["κατάλογος", "κατάλογο", "καταλόγου", "κατάλογοι", "καταλόγους", "καταλόγων"], english: ["list", "lists"] },
      { greek: ["αναφορά", "αναφορά", "αναφοράς", "αναφορές", "αναφορές", "αναφορών"], english: ["report", "reports"] },
      { greek: ["πρόγραμμα", "πρόγραμμα", "προγράμματος", "προγράμματα", "προγράμματα", "προγραμμάτων"], english: ["program", "programs"] }
    ],
    examplePossession: ["Αυτό είναι το αντίγραφο", "copy"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["πλήρης", "πλήρης", "πλήρες"],
        ["πλήρη", "πλήρης", "πλήρες"],
        ["πλήρη", "πλήρη", "πλήρες"],
        ["πλήρους", "πλήρους", "πλήρους"]
      ],
      plural: [
        ["πλήρεις", "πλήρεις", "πλήρη"],
        ["πλήρεις", "πλήρεις", "πλήρη"],
        ["πλήρεις", "πλήρεις", "πλήρη"],
        ["πλήρων", "πλήρων", "πλήρων"]
      ]
    }
  },
  {
    greek: "πολυτελής",
    english: "luxurious",
    exampleNouns: [
      { greek: ["χώρος", "χώρο", "χώρου", "χώροι", "χώρους", "χώρων"], english: ["space", "spaces"] },
      { greek: ["βίλα", "βίλα", "βίλας", "βίλες", "βίλες", "βιλών"], english: ["villa", "villas"] },
      { greek: ["ξενοδοχείο", "ξενοδοχείο", "ξενοδοχείου", "ξενοδοχεία", "ξενοδοχεία", "ξενοδοχείων"], english: ["hotel", "hotels"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["πολυτελής", "πολυτελής", "πολυτελές"],
        ["πολυτελή", "πολυτελής", "πολυτελές"],
        ["πολυτελή", "πολυτελή", "πολυτελές"],
        ["πολυτελούς", "πολυτελούς", "πολυτελούς"]
      ],
      plural: [
        ["πολυτελείς", "πολυτελείς", "πολυτελή"],
        ["πολυτελείς", "πολυτελείς", "πολυτελή"],
        ["πολυτελείς", "πολυτελείς", "πολυτελή"],
        ["πολυτελών", "πολυτελών", "πολυτελών"]
      ]
    }
  },
  {
    greek: "γλωσσομαθής",
    english: "multilingual",
    exampleNouns: [
      { greek: ["υπάλληλος", "υπάλληλο", "υπαλλήλου", "υπάλληλοι", "υπαλλήλους", "υπαλλήλων"], english: ["employee", "employees"] },
      { greek: ["δασκάλα", "δασκάλα", "δασκάλας", "δασκάλες", "δασκάλες", "δασκάλων"], english: ["teacher", "teachers"] },
      { greek: ["παιδί", "παιδί", "παιδιού", "παιδιά", "παιδιά", "παιδιών"], english: ["child", "children"] }
    ],
    examplePossession: ["Αυτό είναι το βιογραφικό", "resume"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["γλωσσομαθής", "γλωσσομαθής", "γλωσσομαθές"],
        ["γλωσσομαθή", "γλωσσομαθής", "γλωσσομαθές"],
        ["γλωσσομαθή", "γλωσσομαθή", "γλωσσομαθές"],
        ["γλωσσομαθούς", "γλωσσομαθούς", "γλωσσομαθούς"]
      ],
      plural: [
        ["γλωσσομαθείς", "γλωσσομαθείς", "γλωσσομαθή"],
        ["γλωσσομαθείς", "γλωσσομαθείς", "γλωσσομαθή"],
        ["γλωσσομαθείς", "γλωσσομαθείς", "γλωσσομαθή"],
        ["γλωσσομαθών", "γλωσσομαθών", "γλωσσομαθών"]
      ]
    }
  },
  {
    greek: "δημοφιλής",
    english: "popular",
    exampleNouns: [
      { greek: ["προορισμός", "προορισμό", "προορισμού", "προορισμοί", "προορισμούς", "προορισμών"], english: ["destination", "destinations"] },
      { greek: ["παραλία", "παραλία", "παραλίας", "παραλίες", "παραλίες", "παραλιών"], english: ["beach", "beaches"] },
      { greek: ["νησί", "νησί", "νησιού", "νησιά", "νησιά", "νησιών"], english: ["island", "islands"] }
    ],
    examplePossession: ["Αυτή είναι η φωτογραφία", "photo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["δημοφιλής", "δημοφιλής", "δημοφιλές"],
        ["δημοφιλή", "δημοφιλής", "δημοφιλές"],
        ["δημοφιλή", "δημοφιλή", "δημοφιλές"],
        ["δημοφιλούς", "δημοφιλούς", "δημοφιλούς"]
      ],
      plural: [
        ["δημοφιλείς", "δημοφιλείς", "δημοφιλή"],
        ["δημοφιλείς", "δημοφιλείς", "δημοφιλή"],
        ["δημοφιλείς", "δημοφιλείς", "δημοφιλή"],
        ["δημοφιλών", "δημοφιλών", "δημοφιλών"]
      ]
    }
  },
  {
    greek: "διεθνής",
    english: "international",
    exampleNouns: [
      { greek: ["οργανισμός", "οργανισμό", "οργανισμού", "οργανισμοί", "οργανισμούς", "οργανισμών"], english: ["organization", "organizations"] },
      { greek: ["εταιρεία", "εταιρεία", "εταιρείας", "εταιρείες", "εταιρείες", "εταιρειών"], english: ["company", "companies"] },
      { greek: ["αεροδρόμιο", "αεροδρόμιο", "αεροδρομίου", "αεροδρόμια", "αεροδρόμια", "αεροδρομίων"], english: ["airport", "airports"] }
    ],
    examplePossession: ["Αυτό είναι το λογότυπο", "logo"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["διεθνής", "διεθνής", "διεθνές"],
        ["διεθνή", "διεθνής", "διεθνές"],
        ["διεθνή", "διεθνή", "διεθνές"],
        ["διεθνούς", "διεθνούς", "διεθνούς"]
      ],
      plural: [
        ["διεθνείς", "διεθνείς", "διεθνή"],
        ["διεθνείς", "διεθνείς", "διεθνή"],
        ["διεθνείς", "διεθνείς", "διεθνή"],
        ["διεθνών", "διεθνών", "διεθνών"]
      ]
    }
  },
  {
    greek: "επιβλαβής",
    english: "harmful",
    exampleNouns: [
      { greek: ["παράγοντας", "παράγοντα", "παράγοντα", "παράγοντες", "παράγοντες", "παραγόντων"], english: ["factor", "factors"] },
      { greek: ["ουσία", "ουσία", "ουσίας", "ουσίες", "ουσίες", "ουσιών"], english: ["substance", "substances"] },
      { greek: ["προϊόν", "προϊόν", "προϊόντος", "προϊόντα", "προϊόντα", "προϊόντων"], english: ["product", "products"] }
    ],
    examplePossession: ["Αυτή είναι η πηγή", "source"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["επιβλαβής", "επιβλαβής", "επιβλαβές"],
        ["επιβλαβή", "επιβλαβής", "επιβλαβές"],
        ["επιβλαβή", "επιβλαβή", "επιβλαβές"],
        ["επιβλαβούς", "επιβλαβούς", "επιβλαβούς"]
      ],
      plural: [
        ["επιβλαβείς", "επιβλαβείς", "επιβλαβή"],
        ["επιβλαβείς", "επιβλαβείς", "επιβλαβή"],
        ["επιβλαβείς", "επιβλαβείς", "επιβλαβή"],
        ["επιβλαβών", "επιβλαβών", "επιβλαβών"]
      ]
    }
  },
  {
    greek: "εργασιομανής",
    english: "workaholic",
    exampleNouns: [
      { greek: ["υπάλληλος", "υπάλληλο", "υπαλλήλου", "υπάλληλοι", "υπαλλήλους", "υπαλλήλων"], english: ["employee", "employees"] },
      { greek: ["διευθύντρια", "διευθύντρια", "διευθύντριας", "διευθύντριες", "διευθύντριες", "διευθυντριών"], english: ["manager", "managers"] },
      { greek: ["άτομο", "άτομο", "ατόμου", "άτομα", "άτομα", "ατόμων"], english: ["person", "people"] }
    ],
    examplePossession: ["Αυτό είναι το γραφείο", "office"],
    forms: {
      singular: [
        ["εργασιομανής", "εργασιομανής", "εργασιομανές"],
        ["εργασιομανή", "εργασιομανής", "εργασιομανές"],
        ["εργασιομανή", "εργασιομανή", "εργασιομανές"],
        ["εργασιομανούς", "εργασιομανούς", "εργασιομανούς"]
      ],
      plural: [
        ["εργασιομανείς", "εργασιομανείς", "εργασιομανή"],
        ["εργασιομανείς", "εργασιομανείς", "εργασιομανή"],
        ["εργασιομανείς", "εργασιομανείς", "εργασιομανή"],
        ["εργασιομανών", "εργασιομανών", "εργασιομανών"]
      ]
    }
  },
  {
    greek: "ακριβός",
    english: "expensive",
    exampleNouns: [
      { greek: ["υπολογιστής", "υπολογιστή", "υπολογιστή", "υπολογιστές", "υπολογιστές", "υπολογιστών"], english: ["computer", "computers"] },
      { greek: ["τσάντα", "τσάντα", "τσάντας", "τσάντες", "τσάντες", "τσαντών"], english: ["bag", "bags"] },
      { greek: ["εισιτήριο", "εισιτήριο", "εισιτηρίου", "εισιτήρια", "εισιτήρια", "εισιτηρίων"], english: ["ticket", "tickets"] }
    ],
    examplePossession: ["Αυτή είναι η τιμή", "price"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["ακριβός", "ακριβή", "ακριβό"],
        ["ακριβέ", "ακριβή", "ακριβό"],
        ["ακριβό", "ακριβή", "ακριβό"],
        ["ακριβού", "ακριβής", "ακριβού"]
      ],
      plural: [
        ["ακριβοί", "ακριβές", "ακριβά"],
        ["ακριβοί", "ακριβές", "ακριβά"],
        ["ακριβούς", "ακριβές", "ακριβά"],
        ["ακριβών", "ακριβών", "ακριβών"]
      ]
    }
  },
  {
    greek: "φτηνός",
    english: "cheap",
    exampleNouns: [
      { greek: ["υπολογιστής", "υπολογιστή", "υπολογιστή", "υπολογιστές", "υπολογιστές", "υπολογιστών"], english: ["computer", "computers"] },
      { greek: ["τσάντα", "τσάντα", "τσάντας", "τσάντες", "τσάντες", "τσαντών"], english: ["bag", "bags"] },
      { greek: ["εισιτήριο", "εισιτήριο", "εισιτηρίου", "εισιτήρια", "εισιτήρια", "εισιτηρίων"], english: ["ticket", "tickets"] }
    ],
    examplePossession: ["Αυτή είναι η τιμή", "price"],
    englishGenitiveStyle: "of",
    forms: {
      singular: [
        ["φτηνός", "φτηνή", "φτηνό"],
        ["φτηνέ", "φτηνή", "φτηνό"],
        ["φτηνό", "φτηνή", "φτηνό"],
        ["φτηνού", "φτηνής", "φτηνού"]
      ],
      plural: [
        ["φτηνοί", "φτηνές", "φτηνά"],
        ["φτηνοί", "φτηνές", "φτηνά"],
        ["φτηνούς", "φτηνές", "φτηνά"],
        ["φτηνών", "φτηνών", "φτηνών"]
      ]
    }
  }
];

const exampleGrammar = [
  {
    gender: "masculine",
    indefiniteArticles: ["ένας", "έναν", "ενός"],
    definiteArticles: ["ο", "τον", "του"],
    pluralArticles: ["οι", "τους", "των"],
    singularSubject: "Αυτός",
    pluralSubject: "Αυτοί"
  },
  {
    gender: "feminine",
    indefiniteArticles: ["μία", "μία", "μίας"],
    definiteArticles: ["η", "την", "της"],
    pluralArticles: ["οι", "τις", "των"],
    singularSubject: "Αυτή",
    pluralSubject: "Αυτές"
  },
  {
    gender: "neuter",
    indefiniteArticles: ["ένα", "ένα", "ενός"],
    definiteArticles: ["το", "το", "του"],
    pluralArticles: ["τα", "τα", "των"],
    singularSubject: "Αυτό",
    pluralSubject: "Αυτά"
  }
];

function englishPossessive(noun) {
  return noun.endsWith("s") ? `${noun}'` : `${noun}'s`;
}

function englishIndefinite(word) {
  return /^(?:[aeiou]|honest|hour|heir)/i.test(word) ? "an" : "a";
}

function feminineAccusativeArticle(word) {
  return /^(?:[αεηιουωάέήίόύώϊΐϋΰκπτξψ]|μπ|ντ|γκ|τσ|τζ)/i.test(word) ? "την" : "τη";
}

function englishGenitive(card, noun, isDefinite, isPlural = false) {
  if (card.englishGenitiveStyle === "of") {
    const article = isPlural || isDefinite ? "the" : englishIndefinite(card.english);
    const nounForm = noun.english[isPlural ? 1 : 0];
    return `This is the ${card.examplePossession[1]} of ${article} ${card.english} ${nounForm}.`;
  }

  if (isPlural) {
    return `This is the ${card.english} ${englishPossessive(noun.english[1])} ${card.examplePossession[1]}.`;
  }

  const article = isDefinite ? "the" : englishIndefinite(card.english);
  return `This is ${article} ${card.english} ${noun.english[0]}'s ${card.examplePossession[1]}.`;
}

adjectiveCards.forEach((card) => {
  const exampleNouns = card.exampleNouns.map((noun, genderIndex) => ({ noun, genderIndex }));
  exampleNouns.push(...(card.additionalExampleNouns || []));

  card.examples = exampleNouns.flatMap(({ noun, genderIndex }) => {
    const grammar = exampleGrammar[genderIndex];
    const singularSubject = card.firstPersonExample ? ["Είμαι", "I am"] : [`${grammar.singularSubject} είναι`, "This is"];
    const pluralSubject = card.firstPersonExample ? ["Είμαστε", "We are"] : [`${grammar.pluralSubject} είναι`, "These are"];
    const accusativeDefiniteArticle = genderIndex === 1
      ? feminineAccusativeArticle(card.forms.singular[2][genderIndex])
      : grammar.definiteArticles[1];

    return [
      {
        label: `nominative singular, ${grammar.gender}`,
        variants: [
          {
            greek: `${singularSubject[0]} ${grammar.indefiniteArticles[0]} ${card.forms.singular[0][genderIndex]} ${noun.greek[0]}.`,
            english: `${singularSubject[1]} ${englishIndefinite(card.english)} ${card.english} ${noun.english[0]}.`
          },
          {
            greek: `${singularSubject[0]} ${grammar.definiteArticles[0]} ${card.forms.singular[0][genderIndex]} ${noun.greek[0]}.`,
            english: `${singularSubject[1]} the ${card.english} ${noun.english[0]}.`
          }
        ]
      },
      {
        label: `accusative singular, ${grammar.gender}`,
        variants: [
          {
            greek: `Βλέπω ${grammar.indefiniteArticles[1]} ${card.forms.singular[2][genderIndex]} ${noun.greek[1]}.`,
            english: `I see ${englishIndefinite(card.english)} ${card.english} ${noun.english[0]}.`
          },
          {
            greek: `Βλέπω ${accusativeDefiniteArticle} ${card.forms.singular[2][genderIndex]} ${noun.greek[1]}.`,
            english: `I see the ${card.english} ${noun.english[0]}.`
          }
        ]
      },
      {
        label: `genitive singular, ${grammar.gender}`,
        variants: [
          {
            greek: `${card.examplePossession[0]} ${grammar.indefiniteArticles[2]} ${card.forms.singular[3][genderIndex]} ${noun.greek[2]}.`,
            english: englishGenitive(card, noun, false)
          },
          {
            greek: `${card.examplePossession[0]} ${grammar.definiteArticles[2]} ${card.forms.singular[3][genderIndex]} ${noun.greek[2]}.`,
            english: englishGenitive(card, noun, true)
          }
        ]
      },
      {
        label: `nominative plural, ${grammar.gender}`,
        variants: [{
          greek: `${pluralSubject[0]} ${grammar.pluralArticles[0]} ${card.forms.plural[0][genderIndex]} ${noun.greek[3]}.`,
          english: `${pluralSubject[1]} the ${card.english} ${noun.english[1]}.`
        }]
      },
      {
        label: `accusative plural, ${grammar.gender}`,
        variants: [{
          greek: `Βλέπω ${grammar.pluralArticles[1]} ${card.forms.plural[2][genderIndex]} ${noun.greek[4]}.`,
          english: `I see the ${card.english} ${noun.english[1]}.`
        }]
      },
      {
        label: `genitive plural, ${grammar.gender}`,
        variants: [{
          greek: `${card.examplePossession[0]} ${grammar.pluralArticles[2]} ${card.forms.plural[3][genderIndex]} ${noun.greek[5]}.`,
          english: englishGenitive(card, noun, true, true)
        }]
      }
    ];
  });
  card.examples.push(...(card.extraExamples || []));
});
