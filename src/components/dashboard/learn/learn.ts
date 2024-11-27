export const options: Highcharts.Options = {
  chart: {
    type: 'column',
    height: 265,
    animation: false,
  },
  title: {
    text: undefined,
  },
  xAxis: {
    categories: [
      'Oct 1-3',
      'Oct 4-6',
      'Oct 7-9',
      'Oct 10-12',
      'Oct 13-15',
      'Oct 16-18',
      'Oct 19-21',
      'Oct 22-24',
      'Oct 25-27',
      'Oct 28-31',
    ],
    title: {
      text: null,
    },
  },
  yAxis: {
    categories: ['0', '30m', '1h', '2h', '3h', '4h', '5h', '6h'],
    title: {
      text: null,
    },
  },
  plotOptions: {
    column: {
      pointWidth: 53,
      pointPadding: 0, // Reduce padding between bars
      groupPadding: 0, // Reduce group padding
      borderWidth: 0, // Remove border for clean appearance
    },
    series: {
      marker: {
        enabled: false,
      },
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
      type: 'column',
      data: [0, 1, 2, 3, 4, 5, 6, 7],
      color: '#EEEEFE',
    },
    
  ],
};

export const pie: Highcharts.Options = {
  chart: {
    type: 'pie',
  },
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },
  accessibility: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '50%',
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      dataLabels: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: 'Task Progress',
      type: 'pie',
      data: [
        { name: 'Completed', y: 10, color: '#5151E3' },
        { name: 'Assigned', y: 10, color: '#ED59EA' },
        { name: 'In Progress', y: 10, color: '#EBA83A' },
      ],
    },
  ],
  credits: {
    enabled: false,
  },
}

export const personInfo = [
  {
    id: 1,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    text: 'Kicking off a project the right way',
    date: '6 days ago',
    likes: '100',
  },
  {
    id: 2,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    text: 'Kicking off a project the right way',
    date: '6 days ago',
    likes: '100',
  },
  {
    id: 3,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    text: 'Kicking off a project the right way',
    date: '6 days ago',
    likes: '100',
  },
  {
    id: 4,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    text: 'Kicking off a project the right way',
    date: '6 days ago',
    likes: '100',
  },
  {
    id: 5,
    name: 'Lucy Thindle',
    occupation: 'Finance manager',
    text: 'Kicking off a project the right way',
    date: '6 days ago',
    likes: '100',
  },
]

export const courses = [
  {
    id: 1,
    title: 'The effectiveness of AI in our daily lives',
    author: 'By Peter Smart & Lucy Thindle',
    skill: 'Skill area:',
    area: 'Project planning (Technical), Effective Delegation(Leadership)',
  },
  {
    id: 2,
    title: 'The effectiveness of AI in our daily lives',
    author: 'By Peter Smart & Lucy Thindle',
    skill: 'Skill area:',
    area: 'Project planning (Technical), Effective Delegation(Leadership)',
  },
  {
    id: 3,
    title: 'The effectiveness of AI in our daily lives',
    author: 'By Peter Smart & Lucy Thindle',
    skill: 'Skill area:',
    area: 'Project planning (Technical), Effective Delegation(Leadership)',
  },
  {
    id: 4,
    title: 'The effectiveness of AI in our daily lives',
    author: 'By Peter Smart & Lucy Thindle',
    skill: 'Skill area:',
    area: 'Project planning (Technical), Effective Delegation(Leadership)',
  },
]
