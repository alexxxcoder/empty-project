const tabsItems = document.querySelectorAll('.tabs__tab');
const tabsButtons = document.querySelectorAll('.tabs__btn');

const openTab = (id) => {
  const tab = document.querySelector(`[data-tab-id="${ id }"]`);
  tab.classList.add('is-active');
};

const btnClick = (e) => {
  const button = e.target;
  const buttons = button.closest('.tabs__btn');

  if (buttons) {
    [...tabsButtons, ...tabsItems].forEach(item => {
      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
      }
    });
    button.classList.add('is-active');
    openTab(button.dataset.openTab);
  }
};

document.addEventListener('click', btnClick);

