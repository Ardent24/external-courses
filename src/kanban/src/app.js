import html from './index.html';
import './styles/app';

// views
import {createSpriteSvg} from './js/views/create-sprite-svg';
import {createHeader} from './js/views/create-header';
import {createFooter} from './js/views/create-footer';
import {createMainBlock} from './js/views/create-main-block';
import {createDropdownHeader} from './js/views/create-dropdown-header';
import {createModal} from './js/views/create-modal';

// controllers
import {renderTime} from "./js/controllers/render-time";
import {controlDropdownHeader} from './js/controllers/control-dropdown-header';
import {tasksCount} from './js/controllers/tasks-count';
import {renderTasks} from './js/controllers/render-tasks';
import {controlModal} from './js/controllers/control-modal';

const app = document.getElementById('app');
const blocks = document.getElementsByClassName('main-block');

createSpriteSvg(app);
createHeader(app);
createMainBlock(app);
createFooter(app);
controlModal(createModal(app, blocks));
controlDropdownHeader(createDropdownHeader());
renderTime();
tasksCount();
renderTasks(blocks);
