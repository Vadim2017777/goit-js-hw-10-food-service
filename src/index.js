import items from './menu.json';
import itemMenuTemplate from './templates/list-item-menu.hbs';
import './styles.css';

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
  menuItem: document.querySelector('.js-menu'),
};

function buildMenuItem(items) {
  const markup = items.map(item => itemMenuTemplate(item)).join('');
  refs.menuItem.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const baseTheme = () => {
  if (localStorage.getItem('Theme') == Theme.DARK) {
    refs.input.checked = true;
    refs.body.classList.add(localStorage.getItem('Theme'));
  }
};

refs.input.addEventListener('change', handleClick);

function handleClick() {
  if (refs.input.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

baseTheme();
buildMenuItem(items);
