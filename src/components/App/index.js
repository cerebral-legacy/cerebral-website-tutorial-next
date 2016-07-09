import {connect, h} from 'cerebral-view-snabbdom'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  items: 'app.items',
  isSaving: 'app.isSaving',
  error: 'app.error'
},
  function App(props) {

    const onFormSubmit = event => {
      event.preventDefault()
      props.signals.app.newItemTitleSubmitted()
    }

    const onInputChange = event => {
      props.signals.app.newItemTitleChanged({
        title: event.target.value
      })
    }

    const onInputUpdate = (oldNode, newNode) => {
      if (oldNode.data.props.disabled && !props.isSaving) {
        newNode.elm.focus()
      }
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
            value: props.newItemTitle,
            disabled: props.isSaving
          },
          hook: {
            update: onInputUpdate
          },
          on: {
            input: onInputChange
          }
        }),
        props.error ?
          h('span', {
            style: {
              color: 'red',
              paddingLeft: '10px'
            }
          }, props.error)
        :
          ''
      ]),
      Items()
    ])
  }
)
