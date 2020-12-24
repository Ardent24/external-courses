import html from './index.html';
import './styles/app';

// progressiv web aps

// views
import spriteSvg from './js/views/create-sprite-svg';
import header from './js/views/create-header';
import footer from './js/views/create-footer';
import mainBlock from './js/views/create-main-block';
import dropdownHeader from './js/views/create-dropdown-header';
import modal from './js/views/create-modal';
import createDropdownTask from './js/views/create-dropdown-tasks';

// modules
import mock from './js/modules/mocks';

// controllers
import renderTime from "./js/controllers/render-time";
import controlDropdownHeader from './js/controllers/control-dropdown-header';
import taskCount from './js/controllers/tasks-count';
import renderTasks from './js/controllers/render-tasks';
import controlModal from './js/controllers/control-modal';

const app = document.getElementById('app');
const blocks = document.getElementsByClassName('main-block');

spriteSvg(app);
header(app);
mainBlock(app);
footer(app);

renderTime();
taskCount();
controlDropdownHeader(dropdownHeader());
renderTasks(blocks);
// work code
createDropdownTask(blocks);
controlModal(modal(app, blocks));