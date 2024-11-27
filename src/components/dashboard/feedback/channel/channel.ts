export const options: Highcharts.Options = {
  chart: {
    type: 'bar',
    height: 184,
    animation: false,
  },
  title: {
    text: undefined,
  },
  xAxis: {
    categories: ['Functional', 'Service', 'Leadership'],
    title: {
      text: null,
    },
  },
  yAxis: {
    categories: [
      'Novice',
      'Advanced beginner',
      'Competent',
      'Proficient',
      'Expert',
    ],
    title: {
      text: null,
    },
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false, // Disables markers
      },
    },
    bar: {
      grouping: true,
    },
  },
  tooltip: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: 'Functional',
      type: 'bar',
      showInLegend: false,
      data: [
        { y: 4, color: '#5151E3' },
        { y: 3, color: '#5151E3' },
        { y: 1, color: '#5151E3' },
      ],
    },
    {
      name: 'Service',
      type: 'bar',
      showInLegend: false,
      data: [
        { y: 4, color: '#B3B3FC' },
        { y: 3, color: '#B3B3FC' },
        { y: 1, color: '#B3B3FC' },
      ],
    },
  ],
}

export const optiontwo: Highcharts.Options = {
  chart: {
    type: 'bar',
    animation: false,
  },
  title: {
    text: undefined,
  },
  xAxis: {
    categories: [
      'Technical Know-How',
      'Rigor',
      'Delivery & Resourcefulness',
      'Responsiveness',
      'Communication',
    ],
    title: {
      text: null,
    },
  },
  yAxis: {
    categories: [
      'Novice',
      'Advanced beginner',
      'Competent',
      'Proficient',
      'Expert',
    ],
    title: {
      text: null,
    },
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
    bar: {
      grouping: true,
    },
  },
  tooltip: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: 'Functional',
      type: 'bar',
      showInLegend: false,
      data: [
        { y: 4, color: '#5151E3' },
        { y: 3, color: '#5151E3' },
        { y: 1, color: '#5151E3' },
        { y: 2, color: '#5151E3' },
        { y: 1, color: '#5151E3' },
      ],
    },
    {
      name: 'Service',
      type: 'bar',
      showInLegend: false,
      data: [
        { y: 4, color: '#B3B3FC' },
        { y: 3, color: '#B3B3FC' },
        { y: 1, color: '#B3B3FC' },
        { y: 2, color: '#B3B3FC' },
        { y: 1, color: '#B3B3FC' },
      ],
    },
  ],
}

export const comments = [
  {
    id: 1,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    date: '6 days ago',
    text:
      'Learning is the compass that guides us through a world of export constant change, unlocking new skills and opportunities to grow stronger each day.',
  },
  {
    id: 2,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    date: '6 days ago',
    text:
      'Learning is the compass that guides us through a world of export constant change, unlocking new skills and opportunities to grow stronger each day.',
  },
  {
    id: 3,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    date: '6 days ago',
    text:
      'Learning is the compass that guides us through a world of export constant change, unlocking new skills and opportunities to grow stronger each day.',
  },
  {
    id: 4,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    date: '6 days ago',
    text:
      'Learning is the compass that guides us through a world of export constant change, unlocking new skills and opportunities to grow stronger each day.',
  },
  {
    id: 5,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    date: '6 days ago',
    text:
      'Learning is the compass that guides us through a world of export constant change, unlocking new skills and opportunities to grow stronger each day.',
  },
]

export const videos = [
  {
    id: 1,
    name: 'Lucy Thindle',
    date: '6 days ago',
    text: 'Professional relationship',
  },
  {
    id: 2,
    name: 'Lucy Thindle',
    date: '6 days ago',
    text: 'Professional relationship',
  },
  {
    id: 3,
    name: 'Lucy Thindle',
    date: '6 days ago',
    text: 'Professional relationship',
  },
  {
    id: 4,
    name: 'Lucy Thindle',
    date: '6 days ago',
    text: 'Professional relationship',
  },
  {
    id: 5,
    name: 'Lucy Thindle',
    date: '6 days ago',
    text: 'Professional relationship',
  },
]
