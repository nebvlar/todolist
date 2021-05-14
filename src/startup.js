import formControl from './modal';
import createUI from './ui';
import newTask from './tasks';

function startup() {
  formControl();
  createUI();
  newTask();
}

export default startup;
