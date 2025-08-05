const ctx = document.getElementById('moneyFlowChart').getContext('2d');

// Gradient fill from purple to transparent blackish
const gradientFill = ctx.createLinearGradient(0, 0, 0, 250);
gradientFill.addColorStop(0, '#211A3A'); // dark purple (top)
gradientFill.addColorStop(1, '#1B1B1B'); // near-black gray (bottom)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Money Flow',
    data: [33000, 52000, 40000, 37000, 73000, 85000],
    fill: true,
    backgroundColor: gradientFill,
    borderColor: '#754fff',
    borderWidth: 3,
    pointRadius: 0,
    tension: 0.4,
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'nearest',
    intersect: false,
    axis: 'x'
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'transparent',
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      min: 0,
      max: 100000,
      ticks: {
        count: 5,
        callback: value => `$${value / 1000}k`,
        color: 'white',
      },
      grid: {
        color: 'transparent',
      }
    }
  }
};

const moneyFlowChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
  plugins: [{
    afterEvent: (chart, args) => {
      if (args.event.type === 'mousemove') {
        const { chartArea, data, scales } = chart;
        const x = args.event.x;
        const { left, right, bottom } = chartArea;

        if (x >= left && x <= right) {
          const index = Math.round((x - left) / (right - left) * (data.labels.length - 1));
          const value = data.datasets[0].data[index];
          const xValue = scales.x.getPixelForValue(data.labels[index]);
          const yValue = scales.y.getPixelForValue(value);

          // Draw vertical line from bottom up to the value's Y
          const ctx = chart.ctx;
          ctx.save();
          ctx.strokeStyle = 'whitesmoke';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(xValue, bottom);
          ctx.lineTo(xValue, yValue);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }]
});
