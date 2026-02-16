document.addEventListener('DOMContentLoaded', () => {
    // 테마 토글 기능
    const themeToggleButton = document.getElementById('themeToggleButton');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // 저장된 테마가 있으면 적용
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggleButton.textContent = '🌙';
        } else {
            themeToggleButton.textContent = '☀️';
        }
    } else {
        // 기본 테마 (라이트 모드) 설정
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggleButton.textContent = '☀️';
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            themeToggleButton.textContent = '☀️';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeToggleButton.textContent = '🌙';
        }
    });

    // 1990년생의 현재 나이 계산
    function calculateAge() {
        const birthYear = 1990;
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        let age = currentYear - birthYear;

        // 생일이 지났는지 체크 (간단하게 1월 1일 기준)
        // 실제 생년월일에 따라 정확히 계산하려면, 월/일까지 비교해야 함
        if (currentMonth === 1 && currentDay < 1) { // 이 부분은 예시를 위해 단순화
            age--;
        }
        
        // 한국 나이 (출생일 기준 1살, 1월 1일 추가 1살)
        const koreanAge = currentYear - birthYear + 1;
        
        const ageDisplay = document.getElementById('ageDisplay');
        if (ageDisplay) {
            ageDisplay.textContent = `${age}세 (만 ${age - 1}세, 한국나이 ${koreanAge}세)`;
        }
    }

    // 나이 계산 함수 호출
    calculateAge();

    // 운세 뽑기 기능
    window.getFortune = function() {
        const fortunes = [
            { emoji: "⭐", text: "대박", detail: "하늘에 별이 뜨는 날! 큰 행운이 찾아와요", number: "88" },
            { emoji: "💰", text: "재물운", detail: "뜻밖의 수입이 생길지도? 복권 한 장!", number: "77" },
            { emoji: "❤️", text: "애정운", detail: "좋은 인연을 만날 확률 200%", number: "99" },
            { emoji: "💼", text: "직장운", detail: "상사에게 인정받는 날, 승진 확률 UP!", number: "66" },
            { emoji: "📚", text: "학업운", detail: "집중력이 폭발하는 날, 공부하기 딱 좋아요", number: "44" },
            { emoji: "💪", text: "건강운", detail: "몸이 가볍고 활기찬 하루", number: "55" },
            { emoji: "🤝", text: "인간관계", detail: "새로운 친구가 생길 징조", number: "33" },
            { emoji: "✈️", text: "여행운", detail: "계획에 없던 여행이 생길지도?", number: "22" },
            { emoji: "🎨", text: "예술운", detail: "창의력이 폭발하는 날", number: "11" },
            { emoji: "🍀", text: "행운", detail: "네잎클로버를 만날 확률 90%", number: "100" },
            { emoji: "🎁", text: "선물운", detail: "예상치 못한 선물을 받아요", number: "70" },
            { emoji: "😊", text: "평범", detail: "무난무난한 하루, 그래도 나쁘지 않아요", number: "50" }
        ];
        
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const selected = fortunes[randomIndex];
        const luckyNumber = Math.floor(Math.random() * 100) + 1;
        
        document.getElementById('fortuneEmoji').textContent = selected.emoji;
        document.getElementById('fortuneText').textContent = selected.text;
        document.getElementById('fortuneDetail').textContent = selected.detail;
        document.getElementById('fortuneNumber').textContent = `🎲 행운의 숫자: ${luckyNumber}`;
        
        const button = event.target;
        if(button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        }
    };
});