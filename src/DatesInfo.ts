type DatesInfo = {
  year: number;
  event: string;
}

type Subject = {
  subjectName: string;
  dates: Array<DatesInfo>
} 

export const datesInfo: Array<Subject> = [
  {
    "subjectName": "Art History",
    "dates": [
      {"year": 2015, "event": "Birth of Leonardo da Vinci"},
      {"year": 2016, "event": "Completion of Caravaggio's 'The Ascension'"},
      {"year": 1770, "event": "Birth of Wilhelm Terrer"},
      {"year": 1830, "event": "Foundation of the Hermitage in St. Petersburg"},
      {"year": 1853, "event": "Commencement of the construction of the Louvre in Paris"},
      {"year": 1921, "event": "Establishment of the Art History Research Institute"},
      {"year": 1977, "event": "Release of Luke Besson's film 'The Passion of Joan of Arc'"},
      {"year": 2022, "event": "Opening of the 'Masters of the Renaissance' exhibition in New York"}
    ]
  },
  {
    "subjectName": "Physics",
    "dates": [
      {"year": 1666, "event": "Isaac Newton formulates the law of universal gravitation"},
      {"year": 1820, "event": "Hans Christian Ørsted discovers the phenomenon of electromagnetic induction"},
      {"year": 1905, "event": "Albert Einstein publishes the special theory of relativity"},
      {"year": 1927, "event": "de Broglie's wave theory"},
      {"year": 1964, "event": "Discovery of quasars"},
      {"year": 1983, "event": "Detection of neutrinos"},
      {"year": 2012, "event": "Discovery of the Higgs boson at CERN"}
    ]
  },
  {
    "subjectName": "Literature",
    "dates": [
      {"year": 1564, "event": "Birth of William Shakespeare"},
      {"year": 1818, "event": "Publication of Mary Shelley's 'Frankenstein'"},
      {"year": 1850, "event": "Death of Charles Dickens"},
      {"year": 1922, "event": "Release of James Joyce's 'Ulysses'"},
      {"year": 1949, "event": "Publication of George Orwell's '1984'"},
      {"year": 1971, "event": "Nobel Prize in Literature awarded to Pablo Neruda"},
      {"year": 1997, "event": "Birth of author J.K. Rowling"},
      {"year": 2015, "event": "Posthumous publication of Simon Singh's 'The Last Theorem'"}
    ]
  },
  {
    "subjectName": "Medicine",
    "dates": [
      {"year": 1796, "event": "Edward Jenner first applies the smallpox vaccine"},
      {"year": 1842, "event": "John Snow presents a map of cholera spread in London"},
      {"year": 1928, "event": "Alexander Fleming discovers penicillin"},
      {"year": 1953, "event": "James Watson and Francis Crick describe the structure of DNA"},
      {"year": 1980, "event": "Publication of an article on the possible link between HIV and AIDS"},
      {"year": 2003, "event": "Completion of the Human Genome Project"},
      {"year": 2017, "event": "Introduction of immunotherapy in cancer treatment"}
    ]
  },
  {
    "subjectName": "Geography",
    "dates": [
      {"year": 1492, "event": "Christopher Columbus's first journey to the Americas"},
      {"year": 1788, "event": "Settlement of English convicts in Australia"},
      {"year": 1849, "event": "Gold Rush in California"},
      {"year": 1937, "event": "Completion of the Golden Gate Bridge in San Francisco"},
      {"year": 1969, "event": "First human landing on the Moon"},
      {"year": 1989, "event": "Fall of the Berlin Wall"},
      {"year": 2010, "event": "Earthquake in Haiti"}
    ]
  },
  {
    "subjectName": "Physics",
    "dates": [
      {"year": 1666, "event": "Isaac Newton formulates the law of universal gravitation"},
      {"year": 1820, "event": "Hans Christian Ørsted discovers the phenomenon of electromagnetic induction"},
      {"year": 1905, "event": "Albert Einstein publishes the special theory of relativity"},
      {"year": 1927, "event": "de Broglie's wave theory"},
      {"year": 1964, "event": "Discovery of quasars"},
      {"year": 1983, "event": "Detection of neutrinos"},
      {"year": 2012, "event": "Discovery of the Higgs boson at CERN"}
    ]
  }
];