import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';

const startDayCalculator = () => {
  const startDateEl = document.getElementsByClassName('js-started-date');

  if (startDateEl === undefined || startDateEl.length === 0) {
    return;
  }

  const startDate = parseISO(startDateEl[0].innerText);
  const nowDate = new Date();

  const daysTotal = differenceInDays(nowDate, startDate);

  Array.from(startDateEl).map((el) => {
    const theElement = el;
    theElement.innerHTML = daysTotal;
    return theElement;
  });
};

export default startDayCalculator;
