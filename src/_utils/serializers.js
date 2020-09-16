const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

const serializers = {
  types: {
    dateAvailableReference: (props) => {
      return h('span', {className: 'js-available-date font-bold'}, props.node.date)
    },
    dateAvailableStarted: (props) => {
      return h('span', {className: 'js-started-date font-bold'}, props.node.date)
    },
  }
}

module.exports = serializers
