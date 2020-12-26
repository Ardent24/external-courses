import {time} from '../modules/time';

const renderTime = () => {
  let [hour, minutes, seconds] = [...time()]
  const blockData = document.querySelector('.footer-data');

  (minutes <= 9) ? minutes = '0' + minutes : minutes;
  blockData.innerText = `${hour}:${minutes}:${seconds}`;

  setInterval(() => {
    (seconds <= 9) ? seconds = '0' + seconds : '';
    blockData.innerText = `${hour}:${minutes}:${seconds}`;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
      (minutes <= 9) ? minutes = '0' + minutes : minutes;
    }
    if (minutes > 59) {
      minutes = 0;
      hour++;
    }
  }, 1000);
}

export {renderTime};