import Inferno from 'inferno'
import {connect} from 'cerebral-view-inferno'

export default connect({
  items: 'app.items'
},
  function Items(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    )
  }
)
