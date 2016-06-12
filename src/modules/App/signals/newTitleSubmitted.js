import set from 'cerebral-addons/set'
import addItem from '../actions/addItem.js'
import postItem from '../actions/postItem.js'
import removeItem from '../actions/removeItem.js'
import updateItem from '../actions/updateItem.js'

export default [
  addItem,
  set('state:/app.newItemTitle', ''),
  set('state:/app.isSaving', true),
  postItem, {
    success: [
      updateItem
    ],
    error: [
      removeItem
    ]
  },
  set('state:/app.isSaving', false)
]
