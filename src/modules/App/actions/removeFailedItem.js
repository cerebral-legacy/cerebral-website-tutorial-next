function removeFailedItem({state}) {
  state.shift('app.items')
}

export default removeFailedItem;
