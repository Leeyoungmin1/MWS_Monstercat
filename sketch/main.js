document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.header-bar_content_menu'); // 메뉴 여는 버튼
  const closeButton = document.querySelector('.nav-content-top button'); // X 버튼
  const navMenu = document.querySelector('.nav'); // 네비게이션 메뉴

  if (menuButton && closeButton && navMenu) {
    // 메뉴 버튼 클릭 시 메뉴 열기
    menuButton.addEventListener('click', () => {
      console.log('메뉴 버튼 클릭됨!'); // 디버깅용
      navMenu.classList.toggle('menu-on');
    });

    // X 버튼 클릭 시 메뉴 닫기
    closeButton.addEventListener('click', () => {
      console.log('X 버튼 클릭됨!'); // 디버깅용
      navMenu.classList.remove('menu-on'); // menu-on 클래스 제거
    });
  } else {
    console.error('메뉴 버튼, X 버튼 또는 네비게이션 메뉴를 찾을 수 없음!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // 모든 "scroll-right" 버튼과 하위 메뉴 찾기
  const arrowIcons = document.querySelectorAll('.scroll-right');

  arrowIcons.forEach((arrowIcon) => {
    // 화살표 아이콘 클릭 시 동작
    arrowIcon.addEventListener('click', (e) => {
      const subMenu = e.target.closest('li').querySelector('.scroll-ul'); // 클릭한 아이콘의 부모 요소에서 하위 메뉴 찾기
      if (subMenu) {
        subMenu.classList.toggle('active'); // 하위 메뉴 보이기/숨기기
        e.target.classList.toggle('rotated'); // 화살표 회전 효과
      }
    });
  });
});
