// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 인트로 화면 로직
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    if (introScreen && mainContent) {
        introScreen.addEventListener('click', () => {
            introScreen.classList.add('fade-out');
            
            // 약간의 딜레이 후 메인 컨텐츠 표시
            setTimeout(() => {
                introScreen.style.display = 'none'; // DOM에서 숨김
                mainContent.classList.remove('hidden'); // 메인 화면 등장 애니메이션 시작
            }, 600); // CSS transition 시간과 맞춤
        });
    }
    // 아코디언 메뉴 로직
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 현재 클릭된 버튼의 상태 토글
            const isActive = button.classList.contains('active');
            const content = button.nextElementSibling;
            
            // 다른 모든 아코디언 항목 닫기
            accordionButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.style.maxHeight = null;
                btn.nextElementSibling.style.padding = '0 16px';
            });

            // 클릭된 항목이 닫혀있었다면 열기
            if (!isActive) {
                button.classList.add('active');
                content.style.padding = '16px';
                content.style.maxHeight = content.scrollHeight + 32 + "px"; // padding 고려
            }
        });
    });

});

// 단계별 네비게이션 함수 (전역)
window.goToStep = function(stepNumber) {
    document.querySelectorAll('.step-container').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    
    const targetStep = document.getElementById('step-' + stepNumber);
    if (targetStep) {
        targetStep.classList.remove('hidden');
        targetStep.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
