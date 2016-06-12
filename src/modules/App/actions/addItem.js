function addItem({ state }) {
  state.unshift('app.items', {
    title: state.get('app.newItemTitle')
  })
}

export default addItem
