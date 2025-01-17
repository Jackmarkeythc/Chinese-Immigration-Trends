// chart.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [
          {
            label: 'Canada',
            data: [50000, 52000, 48000, 55000, 60000],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
          {
            label: 'United States',
            data: [60000, 58000, 54000, 56000, 59000],
            backgroundColor: 'rgba(192, 75, 192, 0.5)',
          },
          {
            label: 'Australia',
            data: [40000, 42000, 38000, 45000, 47000],
            backgroundColor: 'rgba(192, 192, 75, 0.5)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Number of Immigrants' },
          },
          x: {
            title: { display: true, text: 'Years' },
          },
        },
      },
    });
  });
