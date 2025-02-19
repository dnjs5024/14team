const ctx = document.getElementById('myChart').getContext('2d');

const detailsData = {
    "내일배움캠프": "내일배움캠프 완주!!!",
    "포트폴리오": "프로젝트 결과물 : 웹 프로젝트 완성 후 피드백을 후기와 함께 기록하기\n 기술 블로그 포스팅 : 프로젝트 기간 중 발생한 오류, 새로 알게 된 정보를 잘 정리해서 경험 및 이슈 5건 이상 TIL에 작성하기\n ",
    "팀워크 & 의사소통능력": "웹 페이지 제작 중 지속적인 커뮤니케이션으로 오류 최소화\n 팀원들의 주도적인 개발 아이디어 제안가능한 브레인스토밍 시간 마련\n 팀원들의 의견이 갈려도 둥근말투로 이쁘게 말하기",
    "성실함": "TIL 매일매일 작성하고 공유 \n 지각하지 않고 매일 아침 1시간 알고리즘 해결 및 스터디 진행 \n ",
    "개발역량": "java 알고리즘 문제 각자 해결하고 미니 스터디 진행\n chat gpt 사용 지양하기"
};

const data = {
    labels: Object.keys(detailsData),
    datasets: [
        {
            label: '정나단 결성 전',
            data: [0, 10, 40, 20, 30],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointRadius : 10,
            pointHoverRadius:12,
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
            label: '정나단 결성 후',
            data: [100, 100, 100, 100, 100],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointRadius : 10,
            pointHoverRadius: 12,
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
    ]
};

const myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        family: 'Verdana',
                        size: 14,
                        weight: 'bold'
                    },
                    color: 'black',
                    usePointStyle: true,
                    padding: 20
                }
            }
        },
        onClick: (event) => {
            const points = myChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);

            if (points.length > 0) {
                const index = points[0].index;
                const label = data.labels[index];
                showDetails(label);
            }
        }
    }
});

function showDetails(label) {
    const chartWrapper = document.getElementById("chartWrapper");
    const detailsBox = document.getElementById("detailsBox");
    const detailTitle = document.getElementById("detailTitle");
    const detailContent = document.getElementById("detailContent");

    detailTitle.textContent = label;
    detailContent.textContent = detailsData[label];

    chartWrapper.style.transform = "translateX(-350px)";  // ⬅ 차트를 더 왼쪽으로
    detailsBox.style.right = "-80px";  // 🔥 상세 내용을 더 오른쪽으로
    detailsBox.classList.add("active");
}


function closeDetails() {
    const chartWrapper = document.getElementById("chartWrapper");
    const detailsBox = document.getElementById("detailsBox");

    chartWrapper.style.transform = "translateX(0)";
    detailsBox.classList.remove("active");
}
