const data = {
  
    labels: [
      '내일배움캠프',
      '포트폴리오',
      '팀워크 & 의사소통능력',
      '성실함',
      '개발역량'
     
    ],
    datasets: [{
      label: '정나단 결성 전',
      data: [0,10,40,20,30],
      fill: true,
       backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },
    {
      label: '정나단 결성 후',
      data: [100,100,100,100,100],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );