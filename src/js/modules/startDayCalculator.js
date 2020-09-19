import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';

export default function() {
  const startDateEl = document.getElementsByClassName('js-started-date');

  if (startDateEl === undefined || startDateEl.length === 0) {
    return
  }

  const startDate = parseISO(startDateEl[0].innerText)
  const nowDate = new Date();

  const daysTotal = differenceInDays(nowDate, startDate);

  Array.from(startDateEl).map(el => {
    el.innerHTML = daysTotal;
  });
}
