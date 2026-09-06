const adjectiveCards = [
  {
    greek: "απλός",
    english: "simple",
    firstPersonExample: true,
    exampleNoun: {
      greek: ["άνθρωπος", "άνθρωπο", "ανθρώπου", "άνθρωποι", "ανθρώπους", "ανθρώπων"],
      english: ["man", "men"],
      possession: ["Αυτό είναι το σπίτι", "house"]
    },
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
    exampleNoun: {
      greek: ["φίλος", "φίλο", "φίλου", "φίλοι", "φίλους", "φίλων"],
      english: ["friend", "friends"],
      possession: ["Αυτό είναι το σπίτι", "house"]
    },
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
    exampleNoun: {
      greek: ["σκύλος", "σκύλο", "σκύλου", "σκύλοι", "σκύλους", "σκύλων"],
      english: ["dog", "dogs"],
      possession: ["Αυτό είναι το παιχνίδι", "toy"]
    },
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
    exampleNoun: {
      greek: ["σκύλος", "σκύλο", "σκύλου", "σκύλοι", "σκύλους", "σκύλων"],
      english: ["dog", "dogs"],
      possession: ["Αυτό είναι το παιχνίδι", "toy"]
    },
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
    exampleNoun: {
      greek: ["κήπος", "κήπο", "κήπου", "κήποι", "κήπους", "κήπων"],
      english: ["garden", "gardens"],
      possession: ["Αυτή είναι η πύλη", "gate"]
    },
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
    exampleNoun: {
      greek: ["δρόμος", "δρόμο", "δρόμου", "δρόμοι", "δρόμους", "δρόμων"],
      english: ["road", "roads"],
      possession: ["Αυτό είναι το τέλος", "end"]
    },
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
    exampleNoun: {
      greek: ["δρόμος", "δρόμο", "δρόμου", "δρόμοι", "δρόμους", "δρόμων"],
      english: ["road", "roads"],
      possession: ["Αυτό είναι το τέλος", "end"]
    },
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
    exampleNoun: {
      greek: ["φίλος", "φίλο", "φίλου", "φίλοι", "φίλους", "φίλων"],
      english: ["friend", "friends"],
      possession: ["Αυτή είναι η τσάντα", "bag"]
    },
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
  }
];

adjectiveCards.forEach((card) => {
  const noun = card.exampleNoun;
  const singularSubject = card.firstPersonExample ? ["Είμαι", "I am"] : ["Αυτός είναι", "He is"];
  const pluralSubject = card.firstPersonExample ? ["Είμαστε", "We are"] : ["Αυτοί είναι", "They are"];
  card.examples = [
    {
      label: "nominative singular",
      greek: `${singularSubject[0]} ένας ${card.forms.singular[0][0]} ${noun.greek[0]}.`,
      english: `${singularSubject[1]} a ${card.english} ${noun.english[0]}.`
    },
    {
      label: "accusative singular",
      greek: `Βλέπω έναν ${card.forms.singular[2][0]} ${noun.greek[1]}.`,
      english: `I see a ${card.english} ${noun.english[0]}.`
    },
    {
      label: "genitive singular",
      greek: `${noun.possession[0]} ενός ${card.forms.singular[3][0]} ${noun.greek[2]}.`,
      english: `This is a ${card.english} ${noun.english[0]}'s ${noun.possession[1]}.`
    },
    {
      label: "nominative plural",
      greek: `${pluralSubject[0]} ${card.forms.plural[0][0]} ${noun.greek[3]}.`,
      english: `${pluralSubject[1]} ${card.english} ${noun.english[1]}.`
    },
    {
      label: "accusative plural",
      greek: `Βλέπω ${card.forms.plural[2][0]} ${noun.greek[4]}.`,
      english: `I see ${card.english} ${noun.english[1]}.`
    },
    {
      label: "genitive plural",
      greek: `${noun.possession[0]} ${card.forms.plural[3][0]} ${noun.greek[5]}.`,
      english: `This is the ${noun.possession[1]} of ${card.english} ${noun.english[1]}.`
    }
  ];
});
