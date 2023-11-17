type DatesInfo = {
  date: number;
  info: string;
}

type Subject = {
  subjectName: string;
  dates: Array<DatesInfo>
} 

const datesInfo: Array<Subject> = [
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
  }
];