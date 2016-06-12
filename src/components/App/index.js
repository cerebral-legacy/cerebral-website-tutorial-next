import {Component, h} from 'cerebral-view-snabbdom'
import Items from '../Items'

export default Component('App', {
  newItemTitle: 'app.newItemTitle',
  items: 'app.items'
}, props => {

  function onFormSubmit(event) {
    event.preventDefault()
    props.signals.newItemSubmitted()
  }

  function onInputChange(event) {
    props.signals.newItemTitleChanged({
      title: event.target.value
    })
  }

  return h('div', [
    h('form', {
      on: {
        submit: onFormSubmit
      }
    }, [
      h('input', {
        props: {
          type: 'text',
          value: props.newItemTitle
        },
        on: {
          input: onInputChange
        }
      })
    ]),
    Items()
  ])
})
