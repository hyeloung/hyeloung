document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentPanes = document.querySelectorAll('.content-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 모든 버튼과 탭의 활성화 클래스(active) 제거
            tabBtns.forEach(b => b.classList.remove('active'));
            contentPanes.forEach(p => p.classList.remove('active'));

            // 클릭된 버튼 활성화
            btn.classList.add('active');

            // 연결된 데이터 타겟(id)을 찾아 해당 콘텐츠 활성화
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});
