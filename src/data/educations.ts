export interface Education {
   title: string;
   tags: string[];
   active: boolean;
   entries: [string, string][];
}

export const EDUCATIONS: Education[] = [
   {
      title: "Master's Degree in Computer Science",
      tags: ['2017 -> 2019', 'ENSEEIHT', 'France'],
      active: true,
      entries: [
         ['Full title', "Master's Degree in Computer Science and Applied Mathematics, with Honors"],
         ['Institution', 'INPT-ENSEEIHT (Toulouse, France)'],
         [
            'Subjects',
            '▹ Cloud and Big Data ▹ Continuous integration ▹ Software development ▹ Computer forensics ▹ Distributed computing ▹ Computer networks ▹ Logic and proof',
         ],
      ],
   },
   {
      title: "Bachelor's Degree in Computer Science",
      tags: ['2014 -> 2017', 'Paul Sabatier', 'France'],
      active: false,
      entries: [
         [
            'Full title',
            "Bachelor's Degree specialized in Computer Science, with Honors. Ranked 2/129",
         ],
         ['Institution', 'Paul Sabatier University (Toulouse, France)'],
         [
            'Subjects',
            '▹ System programming ▹ Object-oriented design and programming ▹ Functional programming ▹ Automata theory ▹ Databases ▹ Artificial intelligence ▹ Cyber security ▹ Parallel programming',
         ],
      ],
   },
];
