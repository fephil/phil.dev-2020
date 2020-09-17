import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';

const startDateEl = document.getElementsByClassName('js-started-date');
const startDate = parseISO(startDateEl[0].innerText)
const nowDate = new Date();

const daysTotal = differenceInDays(nowDate, startDate);

Array.from(startDateEl).map(el => {
  el.innerHTML = daysTotal;
});
