import {connect, h} from 'cerebral-view-snabbdom'

export default connect({
  items: 'app.items'
},
  function Items(props) {
    return (
      h('ul', props.items.map((item, index) => h('li', {
        key: index
      }, item.title)))
    )
  }
)
