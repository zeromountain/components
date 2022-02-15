// 모든 li 요소에서 이벤트 감지
/*
const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('open');
    items.forEach((element) => {
      if (element !== item) element.classList.remove('open');
    });
  });
});
*/

/*
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

// 이벤트 리스너의 등록 최소화하는 것이 바람직하다
// 이벤트 버블링 →
// 이벤트 캡쳐링 →

// 래퍼요소와 바디요소에 이벤트 리스너를 사용
wrapper.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.classList.contains('.item')) return;
  targetElement.classList.toggle('open');
  items.forEach((element) => {
    if (element !== targetElement) element.classList.remove('open');
  });
});

document.body.addEventListener('click', (e) => {
  if(e.target.classList.contains('context')) return;
  items.forEach((element) => {
    element.classList.remove('open');
  })
});
*/

const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

// 바디에 이벤트 리스너를 사용
document.body.addEventListener('click', (e) => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains('context')) return;
  if (targetClassList.contains('item')) {
    targetClassList.toggle('open');
    items.forEach((element) => {
      if (element !== e.target) element.classList.remove('open');
    });
    return;
  }
  items.forEach((element) => {
    element.classList.remove('open');
  });
});
