import menu from './menu.json';
import menuCardTpl from './templates/cards.hbs';
import './styles.css';
import './changeTheme';

const menuRef = document.querySelector('.js-menu');
// function buildMenu(array) {
//     const markup = array.map(menuCardTpl).join('');
//     // console.log(markup);
//     menuRef.insertAdjacentHTML('beforeend', markup);
//  }
// buildMenu(menu);

const markup = menu.map(menuCardTpl).join('');
menuRef.insertAdjacentHTML('beforeend', markup);
// menuRef.insertAdjacentHTML('beforeend', menuCardTpl(menu));
