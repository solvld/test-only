type DatesInfo = {
  date: number;
  info: string;
}

type Subject = {
  subjectName: string;
  dates: Array<DatesInfo>
} 

export const datesInfo: Array<Subject> = [
  {
    subjectName: 'science',
    dates: [
      {
        date: 2015,
        info: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
      },
      {
        date: 2016,
        info: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
      },
      {
        date: 2017,
        info: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        date: 2018,
        info: '123'
      },
      {
        date: 2019,
        info: '456'
      },
      {
        date: 2020,
        info: '789'
      },
      {
        date: 2021,
        info: '29039'
      },
      {
        date: 2022,
        info: '494949'
      }
    ]
  },
  {
    subjectName: 'cinema',
    dates: [
      {
        date: 1987,
        info: `"хищник"`
      },
      {
        date: 2001,
        info: `"Другой фильм"`
      }
    ]
  },
  {
    subjectName: "Physics",
    dates: [
      {date: 1820, info: "Hans Christian Ørsted discovers the phenomenon of electromagnetic induction"},
      {date: 1666, info: "Isaac Newton formulates the law of universal gravitation"},
      {date: 1905, info: "Albert Einstein publishes the special theory of relativity"},
      {date: 1927, info: "de Broglie's wave theory"},
      {date: 1964, info: "Discovery of quasars"},
      {date: 1983, info: "Detection of neutrinos"},
      {date: 2012, info: "Discovery of the Higgs boson at CERN"}
    ]
  }
];