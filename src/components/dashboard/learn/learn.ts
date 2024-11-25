export const options: Highcharts.Options = {
  chart: {
    type: 'column', // Vertical bar chart
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
      text: null, // No title for X-axis
    },
  },
  yAxis: {
    categories: ['0', '30m', '1h', '2h', '3h', '4h', '5h', '6h'], // Predefined Y-axis labels
    title: {
      text: 'Skill Levels', // Title for the Y-axis
    },
  },
  tooltip: {
    formatter: function () {
      return `<b>${this.x}</b>: ${this.y}`
    },
  },
  series: [
    {
      name: 'Proficiency',
      type: 'column',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // Data values corresponding to each category
      color: '#EEEEFE', // Color of the bars
    },
  ],
  credits: {
    enabled: false, // Removes the Highcharts credit label
  },
}

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
    enabled: false, // Disables accessibility features
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
