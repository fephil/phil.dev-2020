const isPast = require('date-fns/isPast')
const parseISO = require('date-fns/parseISO')
const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

const serializers = {
  types: {
    dateAvailableReference: (props) => {
      let theText
      if (isPast(parseISO(props.node.date))) {
        theText = 'Now'
      } else {
        theText = props.node.date
      }

      return h('span', {className: 'js-available-date font-bold'}, theText)
    },
    dateStartedReference: (props) => {
      return h('span', {className: 'js-started-date font-bold'}, props.node.date)
    },
  }
}

module.exports = serializers
