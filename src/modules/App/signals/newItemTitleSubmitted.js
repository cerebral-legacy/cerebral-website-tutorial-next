import set from 'cerebral-addons/set'
import addItem from '../actions/addItem.js'
import postItem from '../actions/postItem.js'
import removeFailedItem from '../actions/removeFailedItem.js'
import updateItem from '../actions/updateItem.js'

export default [
  // First we optimistically add the item
  // to the items list
  addItem,
  // We empty out the input
  set('state:/app.newItemTitle', ''),
  // We set the app is saving mode to
  // disable the input
  set('state:/app.isSaving', true),
  // We post the item to the server
  postItem, {
    success: [
      // We merge in the ID returned
      // from the server
      updateItem
    ],
    error: [
      // We remove the item since it
      // failed
      removeFailedItem
    ]
  },
  // The app goes back into normal state,
  // enabling the input again
  set('state:/app.isSaving', false)
]
