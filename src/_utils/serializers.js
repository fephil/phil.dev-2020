const isPast = require('date-fns/isPast');
const parseISO = require('date-fns/parseISO');
const format = require('date-fns/format');
const blocksToHtml = require('@sanity/block-content-to-html');

const { h } = blocksToHtml;

const serializers = {
  types: {
    dateAvailableReference: (props) => {
      const theDate = parseISO(props.node.date);
      let theText;

      if (isPast(theDate)) {
        theText = 'Now';
      } else {
        theText = format(theDate, 'do LLLL yyyy');
      }

      return h('span', { className: 'js-available-date font-bold' }, theText);
    },
    dateStartedReference: (props) => {
      return h('span', { className: 'js-started-date font-bold' }, props.node.date);
    },
  },
};

module.exports = serializers;
